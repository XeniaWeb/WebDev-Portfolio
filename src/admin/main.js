import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import {store} from "./store"
import $axios from "./requests"

store.$axios = $axios

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});