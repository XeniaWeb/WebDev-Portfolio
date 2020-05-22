<template lang="pug">
  section.about
    .container.about__wrapper
      .about__title-block
        h2.about__title Блок «Обо мне»
        button(type="button").about__add-btn.add-btn Добавить группу
          .add-btn__icon +
      .about__content
        form.form.about__form
          .form__header
            input.form__title.about__form-title(name="name", value="" placeholder="Название новой группы")
            .form__buttons
              button.form__tick-btn(type="button" name="add")
              button.form__remove-btn(type="button" name="remove")
          hr.form__divider
          .form__content
          .form__controls
            input.form__controls-name(name="name", type="text", placeholder="Новый навык", disabled="disabled")
            .form__controls-value-box
              input.form__controls-value(name="name", type="number", min="0", max="100", placeholder="", disabled="disabled")
            button.form__controls-btn(disabled="disabled")
              .add-btn__icon.add-btn__icon--form +

        form.form.about__form
          .form__header
            input.form__title.about__form-title(name="name", value="Frontend" placeholder="Название новой группы")
            .form__buttons
              button.form__edit-btn(type="button" name="edit")
              button.form__trash-btn(type="button" name="trash")
              button.form__tick-btn.no-displaid(type="button" name="add")
              button.form__remove-btn.no-displaid(type="button" name="remove")
          hr.form__divider
          .form__content
            .form__row
              input.form__row-name(name="name", type="text", value="CSS" disabled="disabled")
              .form__row-value-box
                input.form__row-value(name="name", type="number", min="0", max="100", placeholder="", value="80", disabled="disabled")
              .form__buttons
                button.form__edit-btn(type="button" name="edit")
                button.form__trash-btn(type="button" name="trash")
                button.form__tick-btn.no-displaid(type="button" name="add")
                button.form__remove-btn.no-displaid(type="button" name="remove")
            .form__row
              input.form__row-name(name="name", type="text", value="HTML" disabled=false)
              .form__row-value-box
                input.form__row-value(name="name", type="number", min="0", max="100", placeholder="", value="90", disabled=false)
              .form__buttons
                button.form__edit-btn.no-displaid(type="button" name="edit")
                button.form__trash-btn.no-displaid(type="button" name="trash")
                button.form__tick-btn(type="button" name="add")
                button.form__remove-btn(type="button" name="remove")
            .form__row
              input.form__row-name(name="name", type="text", value="JavaScript" disabled="disabled")
              .form__row-value-box
                input.form__row-value(name="name", type="number", min="0", max="100", placeholder="", value="65", disabled="disabled")
              .form__buttons
                button.form__edit-btn(type="button" name="edit")
                button.form__trash-btn(type="button" name="trash")
                button.form__tick-btn.no-displaid(type="button" name="add")
                button.form__remove-btn.no-displaid(type="button" name="remove")

          .form__controls
            input.form__controls-name(name="name", type="text", placeholder="Новый навык", disabled=false)
            .form__controls-value-box
              input.form__controls-value(name="name", type="number", min="0", max="100", placeholder="", disabled=false)
            button.form__controls-btn(disabled=false)
              .add-btn__icon.add-btn__icon--form +

        form.form.about__form
          .form__header
            input.form__title.about__form-title(name="name", value="Frontend" placeholder="Название новой группы")
            .form__buttons
              button.form__edit-btn(type="button" name="edit")
              button.form__trash-btn(type="button" name="trash")
              button.form__tick-btn.no-displaid(type="button" name="add")
              button.form__remove-btn.no-displaid(type="button" name="remove")
          hr.form__divider
          .form__content
            .form__row
              input.form__row-name(name="name", type="text", value="CSS" disabled="disabled")
              .form__row-value-box
                input.form__row-value(name="name", type="number", min="0", max="100", placeholder="", value="80", disabled="disabled")
              .form__buttons
                button.form__edit-btn(type="button" name="edit")
                button.form__trash-btn(type="button" name="trash")
                button.form__tick-btn.no-displaid(type="button" name="add")
                button.form__remove-btn.no-displaid(type="button" name="remove")
            .form__row
              input.form__row-name(name="name", type="text", value="HTML" disabled=false)
              .form__row-value-box
                input.form__row-value(name="name", type="number", min="0", max="100", placeholder="", value="90", disabled=false)
              .form__buttons
                button.form__edit-btn.no-displaid(type="button" name="edit")
                button.form__trash-btn.no-displaid(type="button" name="trash")
                button.form__tick-btn(type="button" name="add")
                button.form__remove-btn(type="button" name="remove")
            .form__row
              input.form__row-name(name="name", type="text", value="JavaScript" disabled="disabled")
              .form__row-value-box
                input.form__row-value(name="name", type="number", min="0", max="100", placeholder="", value="65", disabled="disabled")
              .form__buttons
                button.form__edit-btn(type="button" name="edit")
                button.form__trash-btn(type="button" name="trash")
                button.form__tick-btn.no-displaid(type="button" name="add")
                button.form__remove-btn.no-displaid(type="button" name="remove")

          .form__controls
            input.form__controls-name(name="name", type="text", placeholder="Новый навык", disabled=false)
            .form__controls-value-box
              input.form__controls-value(name="name", type="number", min="0", max="100", placeholder="", disabled=false)
            button.form__controls-btn(disabled=false)
              .add-btn__icon.add-btn__icon--form +

</template>

<script>
  export default {
    name: "About"
  }
</script>

<style lang="postcss" scoped>
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
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
  //- About =================================== TITLE ======
  .about {
    background: #f9fafe;
    min-height: 60vh;
    padding: 0 20px;
  }

  .about__wrapper {
    max-width: 1080px;
    margin: 0 auto;
    padding: 60px 0 40px;
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

    &:disabled {
      cursor: not-allowed;
    }

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

    &--form {
      font-size: 39px;
      line-height: 40px;
      width: 40px;
      height: 40px;
      margin-right: 0;
    }
  }

  //- About =================================== CONTENT ======
  .about__content {
    display: grid;
    grid-template: "left right" max-content / 1fr 1fr;
    grid-gap: 30px;
  }

  .about__form {
    width: 100%;
    /*min-height: 387px;*/
    background: white;
    box-shadow: 4px 3px 20px 0 rgba(0, 0, 0, 0.07);
  }

  .form {
    padding: 20px;
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
  }

  .form__remove-btn {
    width: 15px;
    height: 15px;
    border: none;
    background: svg-load("cross.svg", fill="#bf2929") center center no-repeat;
    background-size: 100% auto;
    cursor: pointer;
  }

  .form__trash-btn {
    width: 15px;
    height: 15px;
    border: none;
    background: svg-load("trash.svg", fill="#a0a5b1") center center no-repeat;
    background-size: auto 100%;
    cursor: pointer;
  }

  .form__edit-btn {
    width: 15px;
    height: 15px;
    border: none;
    background: svg-load("pencil.svg", fill="#a0a5b1") center center no-repeat;
    background-size: 100% auto;
    cursor: pointer;
  }

  .form__divider {
    color: $line-color-light;
    margin: 20px 0;
  }

  .form__content {
    min-height: 220px;
  }

  .form__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form__row-name {
    flex: 0.65;
    max-width: 65%;
    margin-right: 10px;
    border: 0;
    padding: 5px 0 5px 20px;
    border-bottom: 1px solid $text-color;
    color: $text-color;
    background: none;
    font-size: 16px;
    line-height: 28px;
    font-weight: 600;

    &:disabled {
      opacity: 0.3;
      border-bottom-color: transparent;
    }
  }

  .form__row-value-box {
    flex: 0.2;
    max-width: 20%;
    margin-right: 10px;
    position: relative;

    &:after {
      content: "%";
      position: absolute;
      color: rgba($text-color, 0.7);
      font-size: 16px;
      line-height: 28px;
      font-weight: 400;
      display: block;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }


  }

  .form__row-value {
    width: 100%;
    -ms-text-align-last: right;
    text-align: right;
    border: 0;
    padding: 5px 30px 5px 10px;
    border-bottom: 1px solid $text-color;
    color: $text-color;
    background: none;
    font-size: 16px;
    line-height: 28px;
    font-weight: 600;

    &:disabled {
      opacity: 0.3;
      border-bottom-color: transparent;
    }
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

  //- TABLETS ------------
  @include tabletsBig {
    .about__content {
      grid-template: "form" max-content / 1fr;
    }
  }
  //- PHONES ------------
  @include phones {
    .about {
      padding: 0;
    }

    .about__wrapper {
      max-width: 100%;
      padding: 30px 0;
    }

    .about__title-block {
      display: block;
      margin-bottom: 30px;
      padding: 0 20px;
    }

    .about__title {
      padding-bottom: 25px;
    }

    .form__row-name,
    .form__controls-name {
      flex: 0.6;
      max-width: 60%;
    }

    .form__row-value-box,
    .form__controls-value-box {
      flex: 0.25;
      max-width: 25%;
    }
    .form__buttons {
      flex: 0.15;
      width: 15%;
    }
  }
  //- ============================
</style>