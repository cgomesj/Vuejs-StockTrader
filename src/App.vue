<template>
  <div id="app">
    <component :is="'app-base-header'" />

    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue";

export default {
  components: {
    "app-base-header": BaseHeader
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
</style>
