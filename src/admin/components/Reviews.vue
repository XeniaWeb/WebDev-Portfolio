<template lang="pug">
  section.reviews
    .container.reviews__wrapper
      .reviews__title-block
        h2.reviews__title Блок «Отзывы»
      .reviews__editing
        form.reviews__edit-form
      .reviews__content
        form.reviews__form
        form.reviews__form
        form.reviews__form
        form.reviews__form
        form.reviews__form
</template>

<script>
  export default {
    name: "Reviews"
  }
</script>

<style lang="postcss" scoped>
  @mixin desktopHd() {
    @media screen and (max-width: $bp-desktop-hd) {
      @content ;
    }
  }
  @mixin desktopBig() {
    @media screen and (max-width: $bp-desktop-big) {
      @content ;
    }
  }
  @mixin desktop() {
    @media screen and (max-width: $bp-desktop) {
      @content ;
    }
  }
  @mixin tabletsBig() {
    @media screen and (max-width: $bp-tablets-big) {
      @content ;
    }
  }
  @mixin tablets() {
    @media screen and (max-width: $bp-tablets) {
      @content ;
    }
  }
  @mixin phones() {
    @media screen and (max-width: $bp-phones) {
      @content ;
    }
  }
  //- Reviews =================================== TITLE ======
  .reviews {
    background: #f9fafe;
    min-height: 60vh;
    padding: 0 20px;
  }

  .reviews__wrapper {
    max-width: 1080px;
    margin: 0 auto;
    padding: 60px 0 30px;
  }

  .reviews__title-block {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
  }

  .reviews__title {
    margin: 0 60px 0 0;
    padding: 0;
    font-size: 21px;
    line-height: 34px;
    font-weight: 700;
    color: $text-color;
  }

  //- Reviews =================================== CONTENT ======
  .reviews__editing {
    display: grid;
    grid-template: "form" max-content / 1fr;
    margin-bottom: 30px;
  }

  .reviews__edit-form {
    width: 100%;
    min-height: 519px;
    background: white;
    box-shadow: 4px 3px 20px 0 rgba(0, 0, 0, 0.07);
  }

  .reviews__content {
    display: grid;
    grid-template: "left center right" max-content / 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;

  }

  .reviews__form {
    width: 100%;
    min-height: 380px;
    background: white;
    box-shadow: 4px 3px 20px 0 rgba(0, 0, 0, 0.07);
  }

  //- TABLETS ------------
  @include tablets {
    .reviews__wrapper {
      max-width: 708px;
      padding: 60px 0;
    }

    .reviews__content {
      grid-template: "left right" max-content / 1fr 1fr;
    }
  }
  //- PHONES ------------
  @include phones {
    .reviews {
      padding: 0;
    }

    .reviews__wrapper {
      max-width: auto;
      padding: 30px 0;
    }

    .reviews__title-block {
      display: block;
      margin-bottom: 30px;
      padding: 0 20px;
    }

    .reviews__content {
      grid-template: "form" max-content / 1fr;
    }
  }
</style>