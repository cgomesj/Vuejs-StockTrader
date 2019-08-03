<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
    <router-link to="/" class="navbar-brand text-dark"
      >Stock Trader</router-link
    >

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stocks" class="nav-link">Stocks</router-link>
        </li>
      </ul>

      <ul class="navbar-nav mr-lg-3">
        <li class="nav-item">
          <a class="nav-link text-warning" href="#" @click="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >Save & Load</a
          >
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>
        </li>
      </ul>
      <span class="navbar-text">Your Funds: {{ funds | currency }}</span>
    </div>
  </nav>
</template>

<script>
import * as types from "../store/types";
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      funds: types.GET_FUNDS,
      stockPortfolio: types.GET_PORTFOLIO_STOCKS,
      stocks: types.GET_STOCKS
    })
  },

  methods: {
    ...mapActions({
      endDay: types.RANDOMIZE_STOCK,
      loadData: types.LOAD_DATA
    }),

    saveData() {
      const data = {
        funds: this.funds,
        stockPortfolio: this.stockPortfolio,
        stocks: this.stocks
      };

      this.$http.put("data.json", data);
    }
  }
};
</script>

<style scoped>
#nav a {
  color: #bdbdbd;
}

#nav a.router-link-exact-active {
  color: #313131;
}

#nav .dropdown a {
  color: #646464;
}

#nav .dropdown .dropdown-item:active {
  background: #b8b8b8;
}
</style>
