import {generateStdError} from "@/helpers/errorHandler.js"

export default {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    SET_SKILL: () => {
    },
    ADD_SKILL: (state, newSkill) => {
      state.categories = state.categories.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill)
        }
        return category
      })
    },
    REMOVE_SKILL: (state, deletedSkill) => {
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
    EDIT_SKILL: (state, editedSkill) => {
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
    }
  },
  actions: {
    async addSkill({commit}, skill) {
      try {
        const response = await this.$axios.post("/skills", skill)
        commit('ADD_SKILL', response.data)
        return response
      } catch (error) {
        generateStdError(error)
      }
    },
    async editSkill() {

    },
    async removeSkill() {

    }
  }
}