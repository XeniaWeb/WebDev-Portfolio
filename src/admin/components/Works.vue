<template lang="pug">
  section.works
    .container.works__wrapper
      .works__title-block
        h2.works__title Блок «Работы»
      .works__editing
        form.works__edit-form
      .works__content
        form.works__form
        form.works__form
        form.works__form
        form.works__form
        form.works__form

</template>

<script>
  export default {
    name: "Works"
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
  //- Works =================================== TITLE ======
  .works {
    background: #f9fafe;
    min-height: 60vh;
    padding: 0 20px;
  }

  .works__wrapper {
    max-width: 1080px;
    margin: 0 auto;
    padding: 60px 0 30px;
  }

  .works__title-block {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
  }

  .works__title {
    margin: 0 60px 0 0;
    padding: 0;
    font-size: 21px;
    line-height: 34px;
    font-weight: 700;
    color: $text-color;
  }

  //- Works =================================== CONTENT ======
  .works__editing {
    display: grid;
    grid-template: "form" max-content / 1fr;
    margin-bottom: 30px;
  }

  .works__edit-form {
    width: 100%;
    min-height: 775px;
    background: white;
    box-shadow: 4px 3px 20px 0 rgba(0, 0, 0, 0.07);
  }

  .works__content {
    display: grid;
    grid-template: "left center right" max-content / 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;

  }

  .works__form {
    width: 100%;
    min-height: 556px;
    background: white;
    box-shadow: 4px 3px 20px 0 rgba(0, 0, 0, 0.07);
  }

  //- TABLETS ------------
  @include tablets {
    .works__wrapper {
      max-width: 708px;
      padding: 60px 0;
    }

    .works__content {
      grid-template: "left right" max-content / 1fr 1fr;
    }
  }
  //- PHONES ------------
  @include phones {
    .works {
      padding: 0;
    }

    .works__wrapper {
      max-width: auto;
      padding: 30px 0;
    }

    .works__title-block {
      display: block;
      margin-bottom: 30px;
      padding: 0 20px;
    }

    .works__content {
      grid-template: "form" max-content / 1fr;
    }
  }
</style>