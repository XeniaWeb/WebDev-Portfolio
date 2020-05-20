<template lang="pug">
  section.admin-header
    .admin-header__panel
      .container.admin-header__wrapper
        .admin-header__info
          .admin-header__user.user-info
            .user-info__avatar.avatar
              img(src="~images/content/user.jpg" alt="Photo Xenia Bürki", width="46", height="46").avatar__image
            h1.user-info__title Xenia Bürki / Оксана Бюрки
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
  //- Header =================== AVATAR ======
  .avatar__image {
    background: coral;
    width: 46px;
    height: 46px;
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
  }

  .admin-header__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    min-height: 80px;

  }

  .admin-header__user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 30px;
  }

  .admin-header__title {
    font-size: 14px;
    line-height: 34px;
    font-weight: 400;
    opacity: 0.5;
  }

  .admin-header__logout {
    margin-left: auto;
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

  //- Header ===================== .user-info  =========
  .user-info__title {
    display: block;
    margin-left: 20px;
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
</style>