export const actions = {
  fakePromise({ commit }, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("hiddenIncrement", payload);
        resolve();
      }, 1000);
    });
  }
};
