import {generateStdError} from "@/helpers/errorHandler.js"

export default {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    SET_SKILLS: (state, skills) => {
      state.skills = skills
    },
    ADD_SKILL: (state, newSkill) => {
      state.skills.push(newSkill)
    },
  },
  actions: {
    async getSkills({commit}, skill) {
      try {
        const response = await this.$axios.get('/skills/334', skill)
        commit('SET_SKILLS', response)
        return response
      }catch (error) {
        generateStdError(error)
      }
    },
    async addSkill({commit}, skill) {
      try {
        const response = await this.$axios.post("/skills", skill)
        commit('ADD_SKILL', response.data)
        return response
      } catch (error) {
        generateStdError(error)
      }
    },
    async editSkill({commit}, skill) {
      try {
        const response = await this.$axios.post(`/skills/${skill.id}`, skill)
        commit('categories/EDIT_SKILL_IN_THIS_CATEGORY', response.data.skill, {root: true})
        return response
      } catch (error) {
        generateStdError(error)
      }
    },
    async removeSkill({commit}, skillId) {
      try {
        const response = await this.$axios.delete(`/skills/${skillId}`)
        commit('categories/REMOVE_SKILL_FROM_THIS_CATEGORY', skillId, {root: true})
        return response
      } catch (error) {
        generateStdError(error)
      }
    }
  }
}