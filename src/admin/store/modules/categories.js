import {generateStdError} from "@/helpers/errorHandler.js"

export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, data) => (state.categories = data),
    ADD_CATEGORY: (state, skillCategory) => state.categories.unshift(skillCategory),
    UPDATE_CATEGORY: (state, changedCat) => {
      state.categories = state.categories.map(category => {
        return category.id === changedCat.id ? changedCat : category
      })
    },
    REMOVE_CATEGORY: (state, removedCatId) => {
      state.categories = state.categories.filter(category => category.id !== removedCatId)
    }
  },
  actions: {
    async addCategory({commit}, catTitle) {
      try {
        const {data} = await this.$axios.post("/categories", {title: catTitle})
        commit("ADD_CATEGORY", data)
        return {data}
      } catch (error) {
        generateStdError(error)
      }
    },
    async fetchCategories({commit}) {
      try {
        const {data} = await this.$axios.get(`/categories/334`)
        commit("SET_CATEGORIES", data)
        return {data}
      } catch (error) {
        generateStdError(error)
      }
    },
    async updateCategory({commit}, category) {
      try {
        const response = await this.$axios.post(`/categories/${category.id}`, category)
        commit("UPDATE_CATEGORY", response.data.category)
        return response
      } catch (error) {
        generateStdError(error)
      }
    },
    async removeCategory({commit}, categoryId) {
      try {
        const response = await this.$axios.delete(`/categories/${categoryId}`)
        commit("REMOVE_CATEGORY", categoryId)
        return response
      } catch (error) {
        generateStdError(error)
      }
    },
  }
};
