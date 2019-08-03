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

  [types.MUTATION_RANDOMIZE_STOCK]: state => {
    state.stocks.forEach(stock => {
      const upRandom = Math.random();
      const downRandom = Math.random();
      const newPrice = Math.round(
        stock.price * (1 + (1.15 * upRandom - downRandom))
      );

      if (newPrice >= 1) {
        stock.price = newPrice;
      }
    });
  }
};

const actions = {
  [types.SET_STOCK]: ({ commit }, stocks) => {
    commit(types.MUTATION_SET_STOCK, stocks);
  },

  [types.RANDOMIZE_STOCK]: ({ commit }) => {
    commit(types.MUTATION_RANDOMIZE_STOCK);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
