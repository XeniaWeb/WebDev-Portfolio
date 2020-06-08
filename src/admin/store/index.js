import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import categories from './modules/categories'
import skills from './modules/skills'
import user from './modules/user'
import tooltips from "./modules/tooltips";

export const store = new Vuex.Store({
  modules: {
    categories,
    skills,
    user,
    tooltips
  }
})