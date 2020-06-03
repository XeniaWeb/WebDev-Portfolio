import { generateStdError } from "@/helpers/errorHandler"
import { removeToken } from "@/helpers/token"

export default {
  namespaced: true,
  state: {
    user: {}
  },
  actions: {
    async login({ commit }, user) {
      try {
        const response = await this.$axios.post("/login", user)
      } catch (error) {
        generateStdError(error)
      }
    },
    logout({ commit }) {
      commit("CLEAR_USER")
      removeToken()
      location.href = "/"
    }
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    CLEAR_USER: state => (state.user = {})
  },
  getters: {
    userIsLogged: state => {
      const userObj = state.user
      const userObjIsEmpty =
          Object.keys(userObj).length === 0 && userObj.constructor === Object

      return userObjIsEmpty === false
    },
    userId: state => {
      state.user.id
    }
  }
}