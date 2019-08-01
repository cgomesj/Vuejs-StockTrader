import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import "bootstrap/dist/css/bootstrap.css";
require("bootstrap");

Vue.filter("currency", value => {
  return "$" + value;
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
