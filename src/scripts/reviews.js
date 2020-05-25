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
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
    makeArrWithRequireImages(array) {
      return array.map((item) => {
        const requireImg = require(`../images/content/${item.photo}`)
        item.photo = requireImg
        return item
      })
    },
  }
})