import Vue from "vue";
import * as types from "./types";

export default {
  [types.LOAD_DATA]: ({ dispatch }) => {
    Vue.http
      .get("data.json")
      .then(response => response.json())
      .then(data => {
        if (data) {
          const funds = data.funds;
          const stockPortfolio = data.stockPortfolio;
          const stocks = data.stocks;

          const portfolio = {
            funds,
            stockPortfolio
          };

          dispatch(types.SET_STOCK, stocks);
          dispatch(types.SET_PORTFOLIO, portfolio);
        }
      });
  }
};
