<template lang="pug">
  section.admin-header
    .admin-header__panel
      .container.admin-header__wrapper
        .admin-header__info
          .admin-header__avatar.avatar
            img(src="~images/content/user.jpg" alt="Photo Xenia Bürki", width="46", height="46").avatar__image
          h1.admin-header__user-name Xenia Bürki / Оксана Бюрки
          h2.admin-header__title Панель администрирования
          .admin-header__logout
            a(href="/").admin-header__logout-link Выйти
    .admin-header__navbar.admin-nav
      .container.admin-header__wrapper
        ul.admin-nav__list
          li.admin-nav__item
            a.admin-nav__link.admin-nav__link--active(href="#") Обо мне
          li.admin-nav__item
            a.admin-nav__link(href="#") Работы
          li.admin-nav__item
            a.admin-nav__link(href="#") Отзывы

</template>

<script>
  export default {
    name: "AdminHeader"
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
  //- Header =================== AVATAR ======
  .avatar {
    grid-area: avatar;
    display: block;
    background: coral;
    width: 46px;
    height: 46px;
  }

  .avatar__image {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 50%;

  }

  //- Header ===================== .admin-header   =========
  .admin-header__wrapper {
    margin: 0 auto;
    max-width: 1080px;
    width: 95%;
  // width: 1490px;
  }

  .admin-header__panel {
    background: #424268;
    color: #ffffff;
  }

  .admin-header__info {
    display: grid;
    min-height: 80px;
    grid-template: "avatar user title logout" max-content
        / min-content max-content auto min-content;
    grid-column-gap: 20px;
    align-items: center;
    align-content: center;
  }

  .admin-header__title {
    grid-area: title;
    display: block;
    margin: 0;
    padding: 0;

    font-size: 14px;
    line-height: 34px;
    font-weight: 400;
    opacity: 0.5;
  }

  .admin-header__logout {
    grid-area: logout;
  }

  .admin-header__logout-link {
    color: rgba(#ffffff, 0.7);
    font-size: 16px;
    line-height: 24px;

    &:hover,
    &:focus {
      font-weight: 600;
    }

    &:active {
      opacity: 0.4;
    }
  }

  .admin-header__navbar {
    min-height: 80px;
    background: #ffffff;
    display: flex;
    align-items: center;
  }

  .admin-header__user-name {
    grid-area: user;
    margin: 0;
    padding: 0;
    min-width: 140px;
    display: block;
    font-size: 18px;
    line-height: 34px;
    font-weight: 600;
  }

  //- Header ===================== .admin-nav  =========
  .admin-nav__list {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .admin-nav__item {
    min-width: 120px;
    text-align: center;
  }

  .admin-nav__link {
    display: grid;
    align-items: center;
    position: relative;
    min-height: 80px;
    text-decoration: none;
    color: $text-color;
    font-size: 16px;
    line-height: 36px;

    &:hover,
    &:focus {
      font-weight: 600;
    }

    &--active,
    &:active {
      color: $color-indigo;
      font-weight: 600;

      &::after {
        display: block;
        position: absolute;
        content: '';
        width: 100%;
        height: 3px;
        background: $color-indigo;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }

  //- TABLETS ------------
  @include tablets {
    .admin-header__info {
      min-height: 80px;
      grid-template: "avatar user title logout" max-content
        / min-content auto auto min-content;
      grid-column-gap: 2%;

    }
  }
  //- PHONES ------------
  @include phones {
    .admin-header__wrapper {
      margin: 0 auto;
      width: 100%;
      padding: 0 20px;
    // width: 1490px;
    }

    .admin-header__info {
      min-height: 80px;
      grid-template: "avatar user" max-content "avatar logout" max-content
        / min-content auto;
      grid-column-gap: 10px;

    }

    .admin-header__title {
      display: none;
    }
  }
</style>