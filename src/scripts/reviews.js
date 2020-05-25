import Vue from "vue"
import Flickity from 'vue-flickity'

new Vue({
  el: "#reviews-content",
  template: "#reviews-list",
  components: {
    Flickity
  },
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true,
        freeScroll: false,
        contain: true
      },
      reviews: []
    }
  },
  created() {
    const data = require('../data/reviews.json')
    this.reviews = this.makeArrWithRequireImages(data)
  },
  methods: {
    next() {
      this.$refs.flickity.next()
      this.checkButtons()
    },

    previous() {
      this.$refs.flickity.previous()
      this.checkButtons()
    },
    makeArrWithRequireImages(array) {
      return array.map((item) => {
        const requireImg = require(`../images/content/${item.photo}`)
        item.photo = requireImg
        return item
      })
    },
    checkButtons() {
      if (this.$refs.flickity.selectedIndex() === 0 ) {
        this.$el.querySelector('.ref-slider__nav-btn--prev').disabled = true
      } else if (this.$refs.flickity.selectedIndex() === this.$refs.flickity.slides().length - 1 ) {
        this.$el.querySelector('.ref-slider__nav-btn--next').disabled = true
      } else {
        this.$el.querySelector('.ref-slider__nav-btn--prev').disabled = false
        this.$el.querySelector('.ref-slider__nav-btn--next').disabled = false
      }
    },
  }
})