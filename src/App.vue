<template>
  <div id="app">
    <component :is="'app-base-header'" />

    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <transition name="slide" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as types from "./store/types";
import { mapGetters, mapActions } from "vuex";
import BaseHeader from "./components/BaseHeader.vue";

export default {
  components: {
    "app-base-header": BaseHeader
  },

  computed: {
    ...mapGetters({
      stocks: types.GET_STOCKS
    })
  },

  created() {
    this.setStock(this.stocks);
  },

  methods: {
    ...mapActions({
      setStock: types.SET_STOCK
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-15px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-15px);
    opacity: 0;
  }
}
</style>
