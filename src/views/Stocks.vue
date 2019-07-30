<template>
  <div>
    <h1>The Stocks View</h1>
    <div class="row">
      <component
        :is="'app-stock-unit'"
        v-for="stock in stocks"
        :key="stock.id"
        class="mb-4"
        :stock="stock"
      ></component>
    </div>
  </div>
</template>

<script>
import StockUnit from "../components/StockUnit";

export default {
  components: {
    "app-stock-unit": StockUnit
  },

  data() {
    return {
      stocks: [
        { id: 1, name: "APPLE", price: 110 },
        { id: 2, name: "GOOGL", price: 88 },
        { id: 3, name: "AMZON", price: 23 },
        { id: 4, name: "LNOVO", price: 48 }
      ]
    };
  }
};
</script>

<style scoped></style>
