<template lang="pug">
  section.works
    .container.works__wrapper
      .works__header-block
        h1.works__header-title Блок «Работы»
      .works__editing
        form.works__edit-form.edit-form
          h2.edit-form__title.works__heading Редактирование работы
          hr.form__divider
          .edit-form__content
            .edit-form__uploads
              label(for="image").edit-form__label-upload
                .edit-form__label-text Перетащите или загрузите <br>для загрузки изображения
                input(name="image" type="file" placeholder="item").edit-form__file#image
                button.edit-form__btn-upload Загрузить
            .edit-form__info
              .edit-form__row
                label(for="name").edit-form__label Название
                input(name="name" type="text").edit-form__input#name
              .edit-form__row
                label(for="link").edit-form__label Ссылка
                input(name="link" type="text").edit-form__input#link
              .edit-form__row
                label(for="desc").edit-form__label Описание
                  textarea(name="desc").edit-form__textarea#desc
              .edit-form__row
                label(for="tags").edit-form__label Добавление тега
                input(name="tags").edit-form__input#tags
              ul.edit-form__tags
                li.edit-form__tag HTML
                li.edit-form__tag JS
                li.edit-form__tag php

          .edit-form__controls
            button.edit-form__btn-cancel(type="button") Отмена
            button.edit-form__btn-submit(type="submit") Сохранить


      .works__content
        ul.works__list
          li.works__item.works__item--add(tabindex="0")
            a.works__add-btn.add-btn
              .add-btn__icon +
              .add-btn__text Добавить работу

          li.works__item
            .works__picture
              img.works__image(src="~images/content/2.jpg" width="340" height="150" alt="Фото работы")
              ul.works__tags
                li.works__tag HTML
                li.works__tag PHP
                li.works__tag React
            .works__info
              h3.works__title Сайт веб-разработчика
              .works__desc
                p 1 Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!"
              a(href="//xeniaweb.ch" target="_blank").works__link https://xeniaweb.ch
            .works__control.control
              a(href="" tabindex=0).control__btn.control__btn--edit Править
              a(href="" tabindex=0).control__btn.control__btn--del Удалить
          li.works__item
            .works__picture
              img.works__image(src="~images/content/2.jpg" width="340" height="150" alt="Фото работы")
              ul.works__tags
                li.works__tag HTML
                li.works__tag PHP
                li.works__tag React
            .works__info
              h3.works__title Сайт веб-разработчика
              .works__desc
                p 1 Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!"
              a(href="//xeniaweb.ch" target="_blank").works__link https://xeniaweb.ch
            .works__control.control
              a.control__btn.control__btn--edit Править
              a.control__btn.control__btn--del Удалить
          li.works__item
            .works__picture
              img.works__image(src="~images/content/2.jpg" width="340" height="150" alt="Фото работы")
              ul.works__tags
                li.works__tag HTML
                li.works__tag PHP
                li.works__tag React
            .works__info
              h3.works__title Сайт веб-разработчика
              .works__desc
                p 1 Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!"
              a(href="//xeniaweb.ch" target="_blank").works__link https://xeniaweb.ch
            .works__control.control
              a.control__btn.control__btn--edit Править
              a.control__btn.control__btn--del Удалить

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
  @mixin desktopSmall() {
    @media screen and (max-width: $bp-desktop-small) {
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
  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

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

  .works__header-block {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
  }

  .works__header-title {
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
    padding: 30px;
    box-shadow: 4px 3px 20px 0 rgba(0, 0, 0, 0.07);
    display: grid;
    grid-template: "title" minmax(45px, max-content) "divider" min-content "content" 1fr "controls" max-content
                    / 1fr;
  }

  .edit-form__title {
    grid-area: title;
    margin: 0;
    padding: 0;
    font-size: 18px;
    line-height: 34px;
    font-weight: 700;
    color: $text-color;
  }

  .form__divider {
    grid-area: divider;
    color: $line-color-light;
    margin: 20px 0;
  }

  .edit-form__content {
    grid-area: content;
    display: grid;
    grid-template: "uploads info" min-content
                    / 1fr 1fr;
    grid-column-gap: 30px;
  }

  .edit-form__uploads {
    grid-area: uploads;
    width: 100%;
    display: grid;
    align-content: start;
    align-items: center;
    text-align: center;
  }

  .edit-form__label-upload {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: $bg-color-light;
    border: $line-color-dark 1px dashed;
    min-height: 275px;
  }

  .edit-form__label-text {
    font-size: 16px;
    line-height: 33px;
    font-weight: 600;
    opacity: 0.5;
    margin-bottom: 30px;
  }

  .edit-form__file {
    display: none;
  }

  .edit-form__btn-upload {
    display: block;
    border: none;
    color: white;
    background: $color-indigo linear-gradient(to right, $color-blue 0, $color-blue-deep 100%);
    font-size: 16px;
    line-height: 48px;
    font-weight: 700;
    text-transform: uppercase;
    min-width: 180px;
    padding: 5px 20px;
    border-radius: 50px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(to left, $color-blue-hover 0, $color-blue-deep 100%);
    }

    &:active {
      opacity: 0.8;
    }
  }

  .edit-form__info {
    grid-area: info;
  }

  .edit-form__label {
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    color: rgba($text-color, 0.5);
  }

  .edit-form__input {
    width: 100%;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 600;
    color: $text-color;
    padding: 10px 3px;
    border: 0;
    border-bottom: 1px solid rgba($text-color, 0.5);
  }

  .edit-form__textarea {
    width: 100%;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 600;
    color: $text-color;
    font-family: 'Open Sans', Helvetica, sans-serif;
    min-height: 150px;
    padding: 20px;
    border: 1px solid rgba($text-color, 0.5);
  }

  .edit-form__tags {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .edit-form__tag {
    background: #f4f4f4;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
    font-weight: 600;
    padding: 0 25px 0 15px;
    margin-left: 10px;
    border-radius: 16px;
    text-align: center;
    color: rgba(#283340, 0.7);
    position: relative;

    &:after {
      border: none;
      background: transparent;

      display: block;
      position: absolute;
      content: "";
      width: 10px;
      height: 10px;
      right: 5px;
      top: 10px;
      background: svg-load("remove.svg", fill="$text-color") center center no-repeat;
      background-size: 10px 10px;
      cursor: pointer;
    }

    &:hover,
    &:focus {
      &:after {
        background: svg-load("remove.svg", fill="red") center center no-repeat;
        background-size: 10px 10px;
      }
    }

    &:active {
      opacity: 0.5;
    }
  }

  .edit-form__controls {
    justify-self: end;
    grid-area: controls;
    width: 30%;
    display: flex;
    justify-content: flex-end;
  }

  .edit-form__btn-cancel {
    background-color: transparent;
    border: none;
    color: $color-blue-text;
    font-size: 16px;
    line-height: 34px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: $color-blue-hover;
    }

    &:active {
      opacity: 0.8;
    }
  }

  .edit-form__btn-submit {
    border: none;
    margin-left: 50px;
    color: white;
    background: $color-indigo linear-gradient(to right, $color-blue 0, $color-blue-deep 100%);
    font-size: 16px;
    line-height: 48px;
    font-weight: 700;
    text-transform: uppercase;
    min-width: 180px;
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(to left, $color-blue-hover 0, $color-blue-deep 100%);
    }

    &:active {
      opacity: 0.8;
    }
  }

  .works__list {
    display: grid;
    grid-template: "left center right" max-content / 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;

  }

  .works__item {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 556px;
    background: white;
    box-shadow: 4px 3px 20px 0 rgba(0, 0, 0, 0.07);

    &--add {
      display: grid;
      justify-items: center;
      align-items: center;
      background: $color-blue-light linear-gradient(to right, $color-blue-light 0, $color-blue-deep 100%) 0 0 no-repeat;
      background-size: 100% 100%;
    }
  }

  .add-btn {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #ffffff;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .add-btn__icon {
    font-size: 72px;
    font-weight: 300;
    width: 150px;
    height: 150px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    text-align: center;
    line-height: 150px;
    margin-bottom: 10px;

    &:hover,
    &:focus {
      color: $bg-color-light;
      border-color: $bg-color-light;
    }

    &:active {
      opacity: 0.6;
    }
  }

  .add-btn__text {
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    text-align: center;
    color: #ffffff;
  }

  .works__picture {
    width: 100%;
    position: relative;
  }

  .works__image {
    display: block;
    width: 100%;
    height: auto;
  }

  .works__tags {
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: flex-end;
  }

  .works__tag {
    background: #f4f4f4;
    height: 30px;
    line-height: 30px;
    font-size: 13px;
    font-weight: 600;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 16px;
    text-align: center;
    color: rgba(#283340, 0.7);
  }

  .works__info {
    padding: 30px;
    margin-bottom: auto;
  }

  .works__title {
    font-size: 18px;
    line-height: 30px;
    font-weight: 700;
  }

  .works__desc {
    p {
      font-size: 16px;
      line-height: 30px;
      font-weight: 600;
      color: rgba($text-color, 0.7);
    }
  }

  .works__link {
    display: block;
    color: $color-blue-text;
    font-size: 16px;
    line-height: 30px;
    font-weight: 600;
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &:active {
      opacity: 0.6;
    }
  }

  .works__control {
    width: 100%;
  }

  .control {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 30px;

  }

  .control__btn {
    display: block;
    position: relative;
    padding-right: 25px;
    color: rgba($text-color, 0.5);
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;

    &:hover,
    &:focus {
      color: $text-color;
      opacity: 0.7;
      cursor: pointer;
    }

    &:active {
      opacity: 0.3;
    }

    &--edit {
      &:after {
        content: "";
        position: absolute;
        width: 17px;
        height: 17px;
        display: block;
        right: 0;
        top: 8px;
        background: svg-load("pencil.svg", fill="$color-blue-text") 50% 50% no-repeat;
        background-size: 17px 17px;
        cursor: pointer;
      }
    }

    &--del {
      &:after {
        content: "";
        position: absolute;
        width: 17px;
        height: 17px;
        display: block;
        right: 0;
        top: 8px;
        background: svg-load("cross.svg", fill="#c92e2e") left 50% top 50% no-repeat;
        background-size: 15px 15px;
        cursor: pointer;
      }
    }
  }

  //- TABLETS ------------
  @include tabletsBig {
    .works__list {
      grid-template: "left right" max-content / 1fr 1fr;
    }
  }
  @include tablets {
    .works__wrapper {
      max-width: 708px;
      padding: 60px 0;
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

    .works__header-block {
      display: block;
      margin-bottom: 30px;
      padding: 0 20px;
    }

    .works__list {
      grid-template: "form" max-content / 1fr;
    }
  }
</style>