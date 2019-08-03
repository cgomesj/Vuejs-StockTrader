import * as types from "../types";

const state = {
  funds: 10000,
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
  [types.MUTATION_SET_PORTFOLIO]: (state, stockPortfolio) => {
    state.portfolioStocks = stockPortfolio;
  },

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

  [types.MUTATION_UPDATE_FUNDS]: (state, { operation, amount }) => {
    if (operation == "buy") {
      state.funds -= amount;
    } else if (operation == "sell") {
      state.funds += amount;
    } else if (operation == "set") {
      state.funds = amount;
    }
  }
};

const actions = {
  [types.SET_PORTFOLIO]: ({ commit }, portfolio) => {
    let stockPortfolio = [];

    if (portfolio.stockPortfolio) {
      stockPortfolio = portfolio.stockPortfolio;
    }
    const amount = portfolio.funds;

    commit(types.MUTATION_SET_PORTFOLIO, stockPortfolio);
    commit(types.MUTATION_UPDATE_FUNDS, { operation: "set", amount });
  },

  [types.BUY_STOCK]: ({ commit }, { stockId, stockPrice, quantity }) => {
    const funds = state.funds;
    const amount = stockPrice * quantity;

    if (funds >= amount) {
      commit(types.MUTATION_BUY_STOCK, { stockId, quantity });
      commit(types.MUTATION_UPDATE_FUNDS, { operation: "buy", amount });
    } else {
      alert("Insufficient funds");
    }
  },

  [types.SELL_STOCK]: ({ commit }, { stockId, stockPrice, quantity }) => {
    const record = state.portfolioStocks.find(element => element.id == stockId);

    if (record.quantity >= quantity) {
      const amount = stockPrice * quantity;
      commit(types.MUTATION_SELL_STOCK, { stockId, quantity });
      commit(types.MUTATION_UPDATE_FUNDS, { operation: "sell", amount });
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
