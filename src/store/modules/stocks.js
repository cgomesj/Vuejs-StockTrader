import * as types from "../types";

const state = {
  stocks: [
    { id: 1, name: "APPLE", price: 110 },
    { id: 2, name: "GOOGL", price: 88 },
    { id: 3, name: "AMZON", price: 23 },
    { id: 4, name: "LNOVO", price: 48 }
  ]
};

const getters = {
  [types.GET_STOCKS]: state => {
    return state.stocks;
  },

  [types.GET_STOCKS_UNIT]: state => id => {
    return state.stocks.filter(this.id == id);
  }
};

const mutations = {
  [types.MUTATION_END_DAY]: (state, payload) => {
    for (let index = 0; index < state.stocks.length; index++) {
      state.stocks[index].price += payload;
    }
  }
};

const actions = {
  [types.END_DAY]: ({ commit }, payload) => {
    commit(types.MUTATION_END_DAY, payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
