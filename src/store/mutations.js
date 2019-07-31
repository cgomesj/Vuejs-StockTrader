import * as types from "./types";

export default {
  [types.MUTATION_BUY_STOCK]: (state, payload) => {
    const order = {
      id: payload.stockId,
      name: payload.stockName,
      price: payload.stockPrice,
      quantity: payload.orderQuantity
    };

    const userFunds = state.user.funds;
    const totalAmount = order.price * order.quantity;

    if (userFunds >= totalAmount) {
      state.user.funds = userFunds - totalAmount;
      state.user.stocks.push(order);
    }
  }
};
