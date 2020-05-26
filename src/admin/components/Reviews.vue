<template lang="pug">
  section.reviews
    .container.reviews__wrapper
      .reviews__title-block
        h1.reviews__title Блок «Отзывы»
      .reviews__editing
        form.reviews__edit-form.edit-form
          h2.edit-form__title.works__heading Новый отзыв
          hr.form__divider
          .edit-form__content
            .edit-form__uploads
              label(for="image").edit-form__label-upload
                input(name="image" type="file" placeholder="item").edit-form__file#image
                .edit-form__upload-avatar
                .edit-form__upload-text Добавить фото
            .edit-form__info
              .edit-form__row-name
                label(for="name").edit-form__label Имя автора
                input(name="name" type="text").edit-form__input#name
              .edit-form__row-title
                label(for="link").edit-form__label Титул автора
                input(name="link" type="text").edit-form__input#link
              .edit-form__row-review
                label(for="desc").edit-form__label Отзыв
                  textarea(name="desc").edit-form__textarea#desc
          .edit-form__controls
            button.edit-form__btn-cancel(type="button") Отмена
            button.edit-form__btn-submit(type="submit") Сохранить
      .reviews__content
        ul.reviews__list
          li.reviews__item.reviews__item--add
            a.reviews__add-btn.add-btn
              .add-btn__icon +
              .add-btn__text Добавить работу
          li.reviews__item.review
            .review__author
              .review__author-photo
                img(src="~images/content/Vova.png" alt="Photo author", width="46", height="46").avatar__image
              .review__author-about
                .review__author-name Владимир Сабанцев
                .review__author-desc преподаватель
            hr.form__divider
            .review__text
              p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
            .reviews__control.control
              a(href="" tabindex=0).control__btn.control__btn--edit Править
              a(href="" tabindex=0).control__btn.control__btn--del Удалить
          li.reviews__item.review
            .review__author
              .review__author-photo
                img(src="~images/content/Dima.png" alt="Photo author", width="46", height="46").avatar__image
              .review__author-about
                .review__author-name Ковальчук Дмитрий
                .review__author-desc Основатель Loftschool
            hr.form__divider
            .review__text
              p     "text": "Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"

            .reviews__control.control
              a(href="" tabindex=0).control__btn.control__btn--edit Править
              a(href="" tabindex=0).control__btn.control__btn--del Удалить
          li.reviews__item.review
            .review__author
              .review__author-photo
                img(src="~images/content/Dima.png" alt="Photo author", width="46", height="46").avatar__image
              .review__author-about
                .review__author-name Ковальчук Дмитрий
                .review__author-desc Основатель Loftschool
            hr.form__divider
            .review__text
              p     "text": "Эта девушка проходила обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!"

            .reviews__control.control
              a(href="" tabindex=0).control__btn.control__btn--edit Править
              a(href="" tabindex=0).control__btn.control__btn--del Удалить
          li.reviews__item.review
            .review__author
              .review__author-photo
                img(src="~images/content/Vova.png" alt="Photo author", width="46", height="46").avatar__image
              .review__author-about
                .review__author-name Владимир Сабанцев
                .review__author-desc преподаватель
            hr.form__divider
            .review__text
              p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
            .reviews__control.control
              a(href="" tabindex=0).control__btn.control__btn--edit Править
              a(href="" tabindex=0).control__btn.control__btn--del Удалить

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
  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

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
                    / 5fr 10fr;
    grid-column-gap: 30px;
  }

  .edit-form__uploads {
    grid-area: uploads;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .edit-form__label-upload {
    display: flex;
    flex-direction: column;
    justify-content: center;

  }

  .edit-form__upload-avatar {
    background: $bg-color-light;
    border: none;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;

    &:before {
      position: absolute;
      content: "";
      width: 150px;
      height: 150px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: svg-load("avatar.svg", fill="#ffffff") center center no-repeat;
      background-size: 150px 150px;
    }
  }

  .edit-form__file {
    display: none;
  }

  .edit-form__upload-text {
    margin-top: 20px;
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

  .edit-form__info {
    grid-area: info;
    display: grid;
    grid-template: "name title" min-content "text text" max-content
            / 1fr 1fr;
    grid-column-gap: 30px;
  }

  .edit-form__row-name {
    grid-area: name;
  }

  .edit-form__row-title {
    grid-area: title;
  }

  .edit-form__row-review {
    grid-area: text;
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
    grid-area: review;
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

  .reviews__content {
  }

  .reviews__list{
    display: grid;
    grid-template: "left center right" max-content / 1fr 1fr 1fr;
    grid-gap: 30px;
    margin-bottom: 30px;

  }

  .reviews__item {
    width: 100%;
    min-height: 380px;
    background: white;
    box-shadow: 4px 3px 20px 0 rgba(0, 0, 0, 0.07);
    display: flex;
    flex-direction: column;
    padding: 30px;

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

  .review__author {
    display: flex;
    align-items: center;
  }
  .review__author-photo {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
  }
  .review__author-about {
    margin-left: 20px;
  }
  .review__author-name {
    font-size: 18px;
    line-height: 42px;
    font-weight: 600;
  }
  .review__author-desc {
    font-size: 16px;
    line-height: 30px;
    font-weight: 600;
    opacity: 0.3;
  }
  .review__text {
    p {
      font-size: 16px;
      line-height: 30px;
      font-weight: 600;
      color: rgba($text-color, 0.7);
    }
  }
  .reviews__control {
    width: 100%;
  }

  .control {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
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
  @include tablets {
    .reviews__wrapper {
      max-width: 708px;
      padding: 60px 0;
    }

    .reviews__content {
      grid-template: "left right" max-content / 1fr 1fr;
    }

    .edit-form__info {
      grid-area: info;
      display: grid;
      grid-template: "name" min-content "title" min-content "text" max-content
            / 1fr;
      grid-column-gap: 30px;
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

    .edit-form__content {
      grid-area: content;
      display: grid;
      grid-template: "uploads" min-content "info" min-content
                    / 1fr;
      grid-column-gap: 30px;
    }
  }
</style>