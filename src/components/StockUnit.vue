<template>
  <div class="col-sm-6 col-md-4">
    <div class="card text-left">
      <div class="card-body">
        <h4 class="card-title">
          {{ stock.name }}
          <small class="text-secondary ml-2">${{ stock.price }}</small>
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
            <button
              class="btn btn-outline-success"
              type="button"
              @click="buyStock"
              :disabled="quantityCondition"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stock: Object
  },

  data() {
    return {
      quantity: 0
    };
  },

  computed: {
    quantityCondition() {
      if (this.quantity <= 0 || !Number.isInteger(Number(this.quantity))) {
        return true;
      }
      return false;
    }
  },

  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        orderQuantity: this.quantity
      };

      console.log(order);
      this.quantity = 0;
    }
  }
};
</script>

<style scoped></style>
