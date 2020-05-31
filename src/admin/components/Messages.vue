<template lang="pug">
  section.messages
    .message.message--green
      .message__container
        .message__text Сообщение отправлено
        button.message__close
          span.visually-hidden Закрыть окно
    .message.message--orange
      .message__container
        .message__text Сервер перегружен
        button.message__close
          span.visually-hidden Закрыть окно
    .message.message--red
      .message__container
        .message__text Сообщение не отправлено
        button.message__close.login-form__close(type="button" tabindex=0)
          span.visually-hidden Закрыть окно
    section.modal
      .modal__overlay
        .modal__ok
          h4.modal__title Письмо отправлено
          button.modal__btn(type="button") Закрыть

</template>

<script>
    export default {
        name: "Messages"
    }
</script>

<style lang="postcss" scoped>
  * {
    box-sizing: border-box;
  }
  *:focus {
    outline: $color-indigo-hover 1px dashed;
    outline-offset: -2px;
  }
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
  .message{
    position: fixed;
    bottom: 0;
    width: 391px;
    color: #ffffff;
    padding: 22px 30px;

    &--green {
      background: $color-ok;
      left: 25%;
      transform: translateX(-50%);
    }

    &--orange {
      background: $color-warning;
      left: 50%;
      transform: translateX(-50%);
    }

    &--red {
      background: $color-alarm;
      left: 75%;
      transform: translateX(-50%);
    }
  }
  .message__container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .message__text {
  box-sizing: border-box;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
  }
  .message__close {
    border: none;
    background: transparent;

    display: block;
    position: absolute;
    content: "";
    width: 50px;
    height: 50px;
    top: 10px;
    right: 10px;
    background: svg-load("cross.svg", fill="#ffffff") center center no-repeat;
    background-size: 20px 20px;
    cursor: pointer;

    &:hover,
    &:focus {
      background: svg-load("cross.svg", fill="$soft-color") center center no-repeat;
      background-size: 20px 20px;
    }

    &:active {
      opacity: 0.5;
    }
  }
//- MODAL ========================= MODAL =======
  .modal {
    height: 100vh;
    display: block;
    position: relative;
  }

  .modal__overlay {
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
  .modal__ok {
      width: 560px;
      min-height: 264px;
      background: #ffffff;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 50px 75px 60px;
      position: relative;
  }
  .modal__title {
    display: block;
    margin: 0 0 10px;
    padding: 0;
    font-size: 36px;
    line-height: 60px;
    font-weight: 600;
    text-align: center;
  }
  .modal__btn {
    border: none;
    margin-top: 20px;
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
</style>