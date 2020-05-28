<template lang="pug">
  section.login
    h1.visually-hidden Авторизация пользователя
    .login__overlay
      .login__modal
        form(method="post").login__form.login-form
          h2.login__title.login-form__title Авторизация
          ul.login-form__list
            li.login-form__item.login-form__item--login
              label.login-form__label(for="user-login") Логин
              input.login-form__input.login-form__input--login(
                type="text"
                name="user-login"
                id="user-login"
                placeholder="Введите логин"
                onfocus="this.placeholder=''"
                )
            li.login-form__item.login-form__item--pass
              label.login-form__label(for="user-password") Пароль
              input.login-form__input.login-form__input--pass(
                type="password"
                name="user-password"
                id="user-password"
                placeholder="Введите пароль"
                onfocus="this.placeholder=''"
                )
          button.login-form__btn(type="submit") Отправить
          button.login-form__close(type="button" tabindex=0)
            span.visually-hidden Закрыть

</template>

<script>
  export default {
    name: "Login"
  }
</script>

<style lang="postcss" scoped>
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;

    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  //- Overlay ====================  LOGIN  ===
  .login {
    height: 100vh;
    display: grid;
    background: url("~images/bg/bg-mountain.jpg") 50% 50% / cover;
    color: $text-color;
    position: relative; //- временно
  }

  .login__overlay {
    /*display: none;*/
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    background: rgba(#2d3c4e, 0.8);
    height: 100vh;
    /*position: fixed;*/
    position: absolute; //- временно
    left: 0;
    top: 0;
    z-index: 100;
  }

  .login__modal {
    width: 560px;
    min-height: 517px;
    background: #ffffff;
  }

  //- Overlay ====================== FORM ===
  .login-form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 40px 75px;
    position: relative;
  }

  .login-form__title {
    display: block;
    margin: 0 0 10px;
    padding: 0;
    font-size: 36px;
    line-height: 60px;
    font-weight: 600;
    text-align: center;
  }

  .login-form__list {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
  }

  .login-form__item {
    display: block;
    box-sizing: border-box;
    margin-bottom: 20px;
    padding-left: 50px;
    position: relative;
    background-position: bottom 10px left 0;
    background-repeat: no-repeat;
    background-size: 30px 30px;
    border-bottom: 2px solid $text-color;
    color: $text-color;

    &:hover,
    &:focus {
      border-bottom: 2px solid $color-lila-hover;
    }

    &--login {
      background-image: svg-load("user.svg", fill="$text-color", opacity="0.5");

      &:hover,
      &:focus {
        background-image: svg-load("user.svg", fill="$color-lila-hover", opacity=0.6);
      }
    }

    &--pass {
      background-image: svg-load("link.svg", fill="$text-color", opacity=0.4);

      &:hover,
      &:focus {
        background-image: svg-load("link.svg", fill="$color-lila-hover", opacity=0.5);
      }
    }
  }

  .login-form__label {
    display: block;
    font-size: 16px;
    line-height: 30px;
    font-weight: 600;
    opacity: 0.3;
    padding: 10px 0 0;
  }

  .login-form__input {
    display: block;
    box-sizing: border-box;
    padding: 5px 5px 5px 0;
    width: 100%;
    font-size: 18px;
    line-height: 48px;
    border: none;
    color: $text-color;

    &:hover,
    &focus {
      color: $color-lila-hover;
    }

    &::placeholder {
      color: currentColor;
      opacity: 0.3;
    }
  }

  //- Overlay ====================== BTN ===
  .login-form__btn {
    border: none;
    margin-top: 50px;
    color: white;
    background: $color-indigo linear-gradient(to right, $color-lila, $color-indigo 80%);
    font-size: 18px;
    line-height: 48px;
    font-weight: 800;
    text-transform: uppercase;
    min-width: 350px;
    padding: 18px 20px;
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;

    &:hover {
      background-image: linear-gradient(to right, #9d00ff, #5900ff, #5500f2);
    }

    &:active {
      opacity: 0.8;
    }
  }

  .login-form__close {
    display: block;
    position: absolute;
    content: "";
    width: 50px;
    height: 50px;
    top: 10px;
    right: 10px;
    border: none;
    background: svg-load("cross.svg", fill="$text-color") center center no-repeat;
    background-size: 20px 20px;
    cursor: pointer;

    &:hover,
    &:focus {
      background: svg-load("cross.svg", fill="$color-lila-hover") center center no-repeat;
      background-size: 20px 20px;
    }

    &:active {
      opacity: 0.5;
    }
  }
</style>