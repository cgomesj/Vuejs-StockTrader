import * as types from "../types";

const state = {
  funds: 100,
  portfolioStocks: [{ id: 3, quantity: 6 }]
};

const getters = {
  [types.GET_PORTFOLIO_STOCKS]: (state, getters) => {
    return state.portfolioStocks.map(portfolioStocks => {
      const record = getters[types.GET_STOCKS].find(
        element => element.id == portfolioStocks.id
      );
      return {
        id: portfolioStocks.id,
        quantity: portfolioStocks.quantity,
        name: record.name,
        price: record.price
      };
    });
  },

  [types.GET_FUNDS]: state => {
    return state.funds;
  }
};

const mutations = {
  [types.MUTATION_BUY_STOCK]: (state, { stockId, quantity }) => {
    const record = state.portfolioStocks.find(element => element.id == stockId);

    if (record) {
      record.quantity += quantity;
    } else {
      state.portfolioStocks.push({ id: stockId, quantity });
    }
  },

  [types.MUTATION_SELL_STOCK]: (state, { stockId, quantity }) => {
    const record = state.portfolioStocks.find(element => element.id == stockId);

    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else if (record.quantity == quantity) {
      state.portfolioStocks.splice(state.portfolioStocks.indexOf(record), 1);
    }
  },

  [types.MUTATION_UPDATE_FUNDS]: (state, { operation, totalAmount }) => {
    if (operation == "buy") {
      state.funds -= totalAmount;
    } else if (operation == "sell") {
      state.funds += totalAmount;
    }
  }
};

const actions = {
  [types.BUY_STOCK]: ({ commit }, { stockId, stockPrice, quantity }) => {
    const funds = state.funds;
    const totalAmount = stockPrice * quantity;

    if (funds >= totalAmount) {
      commit(types.MUTATION_BUY_STOCK, { stockId, quantity });
      commit(types.MUTATION_UPDATE_FUNDS, { operation: "buy", totalAmount });
    } else {
      alert("Insufficient funds");
    }
  },

  [types.SELL_STOCK]: ({ commit }, { stockId, stockPrice, quantity }) => {
    const record = state.portfolioStocks.find(element => element.id == stockId);

    if (record.quantity >= quantity) {
      const totalAmount = stockPrice * quantity;
      commit(types.MUTATION_SELL_STOCK, { stockId, quantity });
      commit(types.MUTATION_UPDATE_FUNDS, { operation: "sell", totalAmount });
    } else {
      alert(
        "You have " +
          record.quantity +
          " shares and you're trying to sell " +
          quantity +
          " shares"
      );
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
