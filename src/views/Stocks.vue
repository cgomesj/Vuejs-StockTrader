<template>
  <div>
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
import * as types from "../store/types";
import { mapGetters } from "vuex";
import StockUnit from "../components/StockUnit";

export default {
  components: {
    "app-stock-unit": StockUnit
  },

  computed: {
    ...mapGetters({
      stocks: types.GET_STOCKS
    })
  }
};
</script>

<style scoped></style>
