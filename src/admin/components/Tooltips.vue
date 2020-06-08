<template lang="pug">
  section.messages
    .message(:class="type")
      .message__container
        .message__text {{ text ? text : "Сообщение"}}
        button.message__close(type="button" @click="closeTooltip")
          span.visually-hidden Закрыть окно
</template>

<script>
  import { mapState, mapActions } from "vuex"

  export default {
    name: "Tooltips",
    computed: {
      ...mapState('tooltips', {
        text: state => state.text,
        type: state => state.type
      })
    },
    methods: {
      ...mapActions('tooltips', ['closeTooltip'])
    }
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
  .messages {
    z-index: 2000;
    position: fixed;
    bottom: 0;
    left: 0;
    min-height: 50px;
    width: 100%;
    transform: translateY(200%);
    flex-direction: row;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    &.visible {
      transform: translateY(0);
      transition: all 0.2s ease-in-out;
    }
  }
  .message{
    position: fixed;
    bottom: 0;
    width: 391px;
    color: #ffffff;
    padding: 22px 30px;
    /*background: #5500f2;*/

    &.success {
      background: $color-ok;
      left: 25%;
      transform: translateX(-50%);
    }

    &.warning {
      background: $color-warning;
      left: 50%;
      transform: translateX(-50%);
    }

    &.error {
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
</style>