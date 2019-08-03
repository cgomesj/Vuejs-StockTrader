// Base
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import VueResorce from "vue-resource";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";
require("bootstrap");

// Vue Resource
Vue.use(VueResorce);
Vue.http.options.root = "https://vuejs-stock-trader-39061.firebaseio.com/";

// Vue Filter
Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
