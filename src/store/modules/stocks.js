import * as types from "../types";
import stocks from "../../data/data";

const state = {
  stocks
};

const getters = {
  [types.GET_STOCKS]: state => {
    return state.stocks;
  }
};

const mutations = {
  [types.MUTATION_SET_STOCK]: (state, stocks) => {
    state.stocks = stocks;
  },

  [types.MUTATION_RANDOM_STOCK]: state => {},

  [types.MUTATION_END_DAY]: (state, payload) => {
    for (let index = 0; index < state.stocks.length; index++) {
      state.stocks[index].price += payload;
    }
  }
};

const actions = {
  [types.SET_STOCK]: ({ commit }) => {
    commit(types.MUTATION_SET_STOCK, stocks);
  },

  [types.RANDOM_STOCK]: ({ commit }) => {
    commit(types.MUTATION_RANDOM_STOCK);
  },

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
