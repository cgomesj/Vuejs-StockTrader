<template>
  <div class="col-sm-6 col-md-4">
    <div class="card text-left">
      <div class="card-body">
        <h4 class="card-title">
          {{ stock.name }}
          <small class="text-secondary ml-2 mr-auto">${{ stock.price }}</small>
          <span
            v-if="routeView == '/portfolio'"
            style="font-size: 10pt"
            class="text-primary float-right"
          >
            <span class="text-secondary">Quantity:</span>
            {{ stock.quantity }}
            <br />
            <span class="text-secondary">You Paid:</span>
            ${{ stock.price }}
          </span>
        </h4>
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            aria-label="Quantity"
            aria-describedby="stock-quantity-input"
            v-model="quantity"
          />

          <div class="input-group-append">
            <div v-if="routeView == '/stocks'">
              <button
                class="btn btn-outline-success"
                type="button"
                @click="orderStock(order.BUY_STOCK)"
                :disabled="quantityCondition"
              >
                Buy
              </button>
            </div>
            <div v-else-if="routeView == '/portfolio'">
              <button
                class="btn btn-outline-danger"
                type="button"
                @click="orderStock(order.SELL_STOCK)"
                :disabled="quantityCondition"
              >
                Sell
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from "../store/types";
import { mapActions } from "vuex";

export default {
  props: {
    stock: Object
  },

  data() {
    return {
      quantity: 0,
      order: {
        BUY_STOCK: "buy",
        SELL_STOCK: "sell"
      }
    };
  },

  computed: {
    quantityCondition() {
      if (this.quantity <= 0 || !Number.isInteger(Number(this.quantity))) {
        return true;
      }
      return false;
    },

    routeView() {
      return this.$route.path;
    }
  },

  methods: {
    ...mapActions({
      buyStock: types.BUY_STOCK,
      sellStock: types.SELL_STOCK
    }),

    orderStock(fn) {
      const order = {
        stockId: this.stock.id,
        stockName: this.stock.name,
        stockPrice: this.stock.price,
        orderQuantity: this.quantity
      };

      if (fn == this.order.BUY_STOCK) {
        this.buyStock(order);
      } else if (fn == this.order.SELL_STOCK) {
        this.sellStock(order);
      }
      this.quantity = 0;
    }
  }
};
</script>

<style scoped></style>
