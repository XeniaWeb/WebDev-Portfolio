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
    ADD_SKILL_INTO_THIS_CATEGORY: (state, newSkill) => {
      state.categories = state.categories.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill)
        }
        return category
      })
    },
    ADD_SKILL: (state, newSkill) => {
      state.skills.push(newSkill)
    },
    REMOVE_SKILL_FROM_THIS_CATEGORY: (state, deletedSkill) => {
      const removeSkillInCategory = category => {
        category.skills = category.skills.filter(
            skill => skill.id !== deletedSkill.id
        )
      }

      const findCategory = category => {
        if (category.id === deletedSkill.category) {
          removeSkillInCategory(category);
        }

        return category
      }

      state.categories = state.categories.map(findCategory)
    },
    REMOVE_SKILL: (state, skillId) => {
      state.skills = state.skills.filter(skill => skill.id !== skillId)
    },
    EDIT_SKILL_IN_THIS_CATEGORY: (state, editedSkill) => {
      const editSkillInCategory = category => {
        category.skills = category.skills.map(skill => {
          return skill.id === editedSkill.id ? editedSkill : skill;
        })
      }

      const findCategory = category => {
        if (category.id === editedSkill.category) {
          editSkillInCategory(category)
        }

        return category
      }

      state.categories = state.categories.map(findCategory);
    },
    EDIT_SKILL: (state, editedSkill) => {
      state.skills = state.skills.map(skill => skill.id ===editedSkill.id ? editedSkill : skill)
    }
  },
  actions: {
    async getSkills({commit}, skill) {
      try {
        const response = await this.$axios.get('/skills/334', skill)
        commit('SET_SKILLS', response)
        console.log("Из гетскиллз ", response)
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
        commit('EDIT_SKILL', response.data.skill)
        return response
      } catch (error) {
        generateStdError(error)
      }
    },
    async removeSkill({commit}, skillId) {
      try {
        const response = await this.$axios.delete(`/skills/${skillId}`)
        commit('REMOVE_SKILL', skillId)
        return response
      } catch (error) {
        generateStdError(error)
      }
    }
  }
}