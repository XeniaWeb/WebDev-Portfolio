import Vue from "vue";

const tags = {
  template: "#work-tags",
  components: {},
  props: ["tags"]
}

const previews = {
  template: "#work-previews",
  components: {},
  props: [
    "works",
    "currentIndex",
    "currentWork"
  ]
}

const btns = {
  template: "#work-btns",
  props: [
    "conditionPrev",
    "conditionNext",
  ]

}

const presentation = {
  template: "#work-presentation",
  components: {
    previews,
    btns
  },
  computed: {
    // currentSlide() {
    //   return this.currentIndex + 1
    // },
  },
  props: [
    "currentWork",
    "works",
    "currentIndex",
    "conditionPrev",
    "conditionNext",
    "currentSlide",
  ]
}

const info = {
  template: "#work-info",
  components: {
    tags
  },
  props: ["currentWork"],
  computed: {
    tagsListArray() {
      return this.currentWork.skills.split(",")
    }
  }
}

new Vue({
  el: "#slider-component",
  template: "#work-container",
  components: {
    presentation,
    info
  },
  data() {
    return {
      works: [],
      currentIndex: 0,
      conditionPrev: true,
      conditionNext: false,
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
    },
    currentSlide() {
      return this.currentIndex + 1
    },
  },
  watch: {
    currentIndex(value) {
      this.makeLimitedLoopForIndex(value)
    }
    // currentIndex(value) {
    //   this.makeLimitedLoopForIndex(value)
    // }
  },
  methods: {
    makeLimitedLoopForIndex(value) {
      const worksAmountFromZero = this.works.length - 1
      if (0 < value < worksAmountFromZero) {
        this.conditionPrev = false
        this.conditionNext = false
      }
      if (value === worksAmountFromZero)
        this.conditionNext = true
      if (value <= 0 ) this.conditionPrev = true
    },
    makeInfinityLoopForIndex(value) {
      const worksAmountFromZero = this.works.length - 1
      if (value > worksAmountFromZero) this.currentIndex = 0
      if (value < 0) this.currentIndex = worksAmountFromZero
    },
    handleSlide(direction) {
      switch (direction) {
        case "prev":
          this.currentIndex--
          break
        case "next":
          this.currentIndex++
          break
      }
    },
    makeArrWithRequireImages(array) {
      return array.map((item) => {
        const requireImg = require(`../images/content/${item.photo}`)
        item.photo = requireImg
        return item
      })
    },
  },
  created() {
    const data = require("../data/works.json")
    this.works = this.makeArrWithRequireImages(data)
  }
})