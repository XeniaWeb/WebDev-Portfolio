import {generateStdError} from "@/helpers/errorHandler.js"

export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES_WITH_SKILLS: (state, data) => (state.categories = data),
    GET_CATEGORIES: (state, data) => (state.categories = data),
    ADD_CATEGORY: (state, skillCategory) => state.categories.unshift(skillCategory),
    UPDATE_CATEGORY: (state, changedCat) => {
      state.categories = state.categories.map(category => {
        return category.id === changedCat.id ? changedCat : category
      })
    },
    REMOVE_CATEGORY: (state, removedCatId) => {
      state.categories = state.categories.filter(category => category.id !== removedCatId)
    },
    ADD_SKILL_INTO_THIS_CATEGORY: (state, newSkill) => {
      state.categories = state.categories.map(category => {
        if (category.id === newSkill.category) {
          category.skills.unshift(newSkill)
        }
        return category
      })
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
    async addSkill({commit}, skill) {
      try {
        const {data} = await this.$axios.post("/skills", skill)
        commit("ADD_SKILL_INTO_THIS_CATEGORY", data)
        return {data}
      } catch (error) {
        generateStdError(error)
      }
    },
    async getCategories({commit}) {
      try {
        const {data} = await this.$axios.get(`/categories`)
        commit("GET_CATEGORIES", data)
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
    async fetchCategories({commit}) {
      try {
        const {data} = await this.$axios.get(`/categories/334`)
        commit('SET_CATEGORIES_WITH_SKILLS', data)
        return {data}
      } catch (error) {
        generateStdError(error)
      }
    },
  }
};
