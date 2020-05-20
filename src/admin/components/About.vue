<template lang="pug">
  section.about
    .container.about__wrapper
      .about__title-block
        h2.about__title Блок «Обо мне»
        button(type="button").about__add-btn.add-btn Добавить группу
          .add-btn__icon +
      .about__content
        form.about__form
        form.about__form
        form.about__form

</template>

<script>
  export default {
    name: "About"
  }
</script>

<style lang="postcss" scoped>
  //- About =================================== TITLE ======
  .about {
    background: #f9fafe;
    min-height: 60vh;
    padding: 0 20px;
  }

  .about__wrapper {
    max-width: 1080px;
    margin: 0 auto;
    padding: 60px 0;
  }

  .about__title-block {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
  }

  .about__title {
    margin: 0 60px 0 0;
    padding: 0;
    font-size: 21px;
    line-height: 34px;
    font-weight: 700;
    color: $text-color;
  }

  .about__add-btn {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 34px;
    font-weight: 600;
    color: $color-blue-text;

    &:hover,
    &:focus {
      color: $color-blue-hover;

      .add-btn__icon {
        background: linear-gradient(to left, $color-blue-hover 0, $color-blue-deep 100%);
      }

      &:active {
        opacity: 0.4;
      }
    }
  }

  .add-btn__icon {
    display: grid;
    align-content: center;
    font-size: 20px;
    background: $color-indigo linear-gradient(to right, $color-blue 0, $color-blue-deep 100%);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    color: white;
    margin-right: 20px;
  }

  //- About =================================== CONTENT ======
  .about__content {
    display: grid;
    grid-template: "left right" max-content / 1fr 1fr;
    grid-gap: 30px;
  }

  .about__form {
    width: 100%;
    height: 387px;
    background: white;
    box-shadow: 4px 3px 20px 0 rgba(0, 0, 0, 0.07);
  }

</style>