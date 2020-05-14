import Vue from "vue";

const skill = {
  template: "#skill",
  props: [
    "skill"
  ],
  methods: {
    drawSkillsCircle() {
      const circle = this.$refs["circle"]
      circle.style.animationDelay = this.skill.percent;
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
  created() {
    this.skills = require('../data/skills.json');
  }
});