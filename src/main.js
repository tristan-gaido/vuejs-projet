import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";

Vue.config.productionTip = false;
export const bus = new Vue();
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App />"
}).$mount("#app");
