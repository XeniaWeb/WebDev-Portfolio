<template lang="pug">
  form
    .form__header
      input.form__title.about__form-title(
        type="text"
        v-model="catTitle"
        name="name"
        value=""
        placeholder="Название новой группы"
        onfocus="this.placeholder=''")
      .form__buttons
        button.form__tick-btn(@click.prevent="createNewCat" type="button" name="add")
        button.form__remove-btn(type="button" name="remove" @click.revent="$emit('toggleAddForm')")
    hr.form__divider
    .form__content
    .form__controls
      input.form__controls-name(name="name", type="text", placeholder="Новый навык", disabled="disabled")
      .form__controls-value-box
        input.form__controls-value(name="name", type="number", min="0", max="100", placeholder="", disabled="disabled")
      button.form__controls-btn(disabled="disabled")
        .add-btn__icon.add-btn__icon--form +
</template>

<script>
  import {mapActions} from "vuex"

  export default {
    name: "SkillsAdd",
    data: () => ({
      catTitle: ""
    }),
    methods: {
      ...mapActions("tooltips", ["showTooltip", "closeTooltip"]),
      ...mapActions("categories", ["addCategory"]),
      async createNewCat() {
        try {
          const {response} = await this.addCategory(this.catTitle)
          this.catTitle = ""
          this.$emit('toggleAddForm')
          this.showTooltip({
            type: "success",
            text: "Поздравляю! Еще одна группа навыков... Не надоело?"
          })
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: `Не удалось добавить категорию...`
          })
        }
      }
    }
  }
</script>

<style lang="postcss" scoped>
  * {
    box-sizing: border-box;
  }

  *:focus {
    outline: $color-indigo-hover 1px dashed;
    outline-offset: 3px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .no-displaid {
    display: none;
  }

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

  .form__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form__title {
    border: 0;
    width: 60%;
    padding: 5px 0;
    flex: 0.6;
    border-bottom: 1px solid $text-color;
    color: $text-color;
    background: none;
    font-size: 16px;
    line-height: 32px;
    font-weight: 600;

    &::placeholder {
      color: inherit;
      opacity: 0.5;
    }
  }

  .form__buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0.1;
    width: 10%;
  }

  .form__tick-btn {
    width: 15px;
    height: 15px;
    border: none;
    background: svg-load("tick.svg", fill="#00d70a") center center no-repeat;
    background-size: 15px 15px;
    cursor: pointer;

    &:hover {
      background: svg-load("tick.svg", fill="#009936") center center no-repeat;
      background-size: 15px 15px;
    }
  }

  .form__remove-btn {
    width: 15px;
    height: 15px;
    border: none;
    background: svg-load("cross.svg", fill="#bf2929") center center no-repeat;
    background-size: 100% auto;
    cursor: pointer;

    &:hover {
      background: svg-load("cross.svg", fill="#e54e4e") center center no-repeat;
      background-size: 100% auto;
    }
  }

  .form__divider {
    color: $line-color-light;
    margin: 20px 0;
  }

  .form__content {
    min-height: 220px;
  }

  .form__controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .form__controls-name {
    flex: 0.6;
    max-width: 70%;
    margin-right: 10px;
    border: 0;
    padding: 5px 0 5px 20px;
    border-bottom: 1px solid $text-color;
    color: $text-color;
    background: none;
    font-size: 16px;
    line-height: 32px;
    font-weight: 600;


    &:disabled {
      opacity: 0.3;
    }

    &::placeholder {
      color: inherit;
      opacity: 0.5;
    }
  }

  .form__controls-value-box {
    flex: 0.20;
    max-width: 20%;
    margin-right: 10px;
    position: relative;

    &:after {
      content: "%";
      position: absolute;
      color: rgba($text-color, 0.7);
      font-size: 16px;
      line-height: 32px;
      font-weight: 400;
      display: block;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .form__controls-value {
    width: 100%;
    border: 0;
    padding: 5px 30px 5px 10px;
    border-bottom: 1px solid $text-color;
    color: $text-color;
    background: none;
    font-size: 16px;
    line-height: 32px;
    font-weight: 600;

    &:disabled {
      opacity: 0.3;
    }
  }

  .form__controls-btn {
    padding: 0;
    border: 0;
    background: transparent;
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }

  //- PHONES ------------
  @include phones {

    .form__buttons {
      flex: 0.15;
      width: 15%;
    }
  }
  //- ============================
</style>