import "es6-promise/auto";
import Vue from "vue";
import Vuex from "vuex";

import { actions } from "./actions";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { setters } from "./setters";
import { state } from "./state";

// Modules
import { ChuckNorrisModule } from "./modules/ChuckNorrisModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    chuckNorris: ChuckNorrisModule
  },
  actions,
  getters,
  mutations,
  setters,
  state
});
