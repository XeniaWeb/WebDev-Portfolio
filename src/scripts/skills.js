import Vue from "vue";
import axios from "axios"

const skill = {
  template: "#skill",
  props: [
    "skill"
  ],
  methods: {
    drawSkillsCircle() {
      const circle = this.$refs["circle"]
      circle.style.animationDelay = `-${this.skill.percent}s`
    }
  },
  mounted() {
    this.drawSkillsCircle()
  }
}

const skillsGroup = {
  template: "#skills-group",
  components: {
    skill
  },
  props: [
    "category"
  ]
}

new Vue({
  el: "#skills-values",
  template: "#skills-list",
  components: {
    skillsGroup, skill
  },
  data() {
    return {
      skills: []
    }
  },
  async created() {
    const {data} = await axios.get('https://webdev-api.loftschool.com/categories/334');
    this.skills = data
  }
});