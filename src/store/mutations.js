export const mutations = {
  increment(state, payload) {
    state.count += payload.amount;
  },
  hiddenIncrement(state, payload) {
    state.hiddenCount += payload.amount;
  }
};
