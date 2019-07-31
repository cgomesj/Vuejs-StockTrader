import * as types from "./types";

export default {
  [types.BUY_STOCK]: ({ commit }, payload) => {
    commit(types.MUTATION_BUY_STOCK, payload);
  }
};
