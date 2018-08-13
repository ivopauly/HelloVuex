import axios from "axios";

export const ChuckNorrisModule = {
  namespaced: true,
  state: {
    countJokes: 0,
    joke: {},
    jokes: []
  },
  mutations: {
    increment(state, payload) {
      state.countJokes += payload.amount;
    },
    addJokeToHistory(state, payload) {
      state.jokes.push(payload);
    }
  },
  actions: {
    async getJoke({ state, commit }, payload) {
      try {
        const response = await axios.get(
          "https://api.chucknorris.io/jokes/random?category=" + payload.category
        );
        commit("increment", { amount: 1 });
        commit("addJokeToHistory", response.data);
        return (state.joke = response.data);
      } catch (err) {
        return err;
      }
    }
  },
  getters: {
    jokesHistory(state) {
      if (state.jokes.length > 0) {
        return state.jokes;
      } else {
        return "Whoops, your not so funny at the moment...";
      }
    },
    sumWithRootCount(state, getters, rootState) {
      return state.countJokes + rootState.count;
    }
  }
};
