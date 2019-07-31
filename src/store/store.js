//app
import Vue from "vue";
import Vuex from "vuex";

//modules
import stocks from "./modules/stocks";

//functions
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { stocks },
  state: {
    user: {
      id: "my1",
      funds: 1000,
      stocks: [{ id: 1, name: "AMZON", price: "110", quantity: 2 }]
    }
  },
  getters,
  mutations,
  actions
});
