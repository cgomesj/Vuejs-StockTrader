<template>
  <div class="row">
    <div class="col">
      <h1>The Portfolio View</h1>
      <div class="row">
        <component
          :is="'app-stock-unit'"
          v-for="stock in portfolioStocks"
          :key="stock.id"
          class="mb-4"
          :stock="stock"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapGetters } from "vuex";
import StockUnit from "../components/StockUnit";

export default {
  components: {
    "app-stock-unit": StockUnit
  },

  computed: {
    ...mapGetters({
      portfolioStocks: [types.GET_PORTFOLIO_STOCKS]
    })
  }
};
</script>

<style scoped></style>
