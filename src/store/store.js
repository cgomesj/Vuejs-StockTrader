//app
import Vue from "vue";
import Vuex from "vuex";

//modules
import stocks from "./modules/stocks";
import portfolio from "./modules/portfolio";

//functions
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { stocks, portfolio },
  state: {},
  getters,
  mutations,
  actions
});
