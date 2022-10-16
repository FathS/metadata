import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue'

//css import
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "../src/assets/css/style.css"

//css import end

Vue.config.productionTip = false;

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
