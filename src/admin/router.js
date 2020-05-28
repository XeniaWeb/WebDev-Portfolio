import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "./components/Pages/About";
import Works from "./components/Pages/Works";
import Reviews from "./components/Pages/Reviews";

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    component: About
  },
  {
    path: '/works',
    component: Works
  },
  {
    path: '/reviews',
    component: Reviews
  }
]

export default new VueRouter({routes, mode: 'history'})