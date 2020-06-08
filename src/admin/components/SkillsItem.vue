<template lang="pug">
  li.form__row
    input.form__row-name(
      v-model="editedSkill.title"
      name="name"
      type="text"
      value="editedSkill.title"
      :disabled="inputDisabled"
      )
    .form__row-value-box
      input.form__row-value(
        v-model="editedSkill.percent"
        name="percent"
        type="number"
        min="0"
        max="100"
        placeholder=""
        value="editedSkill.percent",
        :disabled="inputDisabled"
        )
    .form__buttons(v-if="inputDisabled" )
      button.form__edit-btn(@click.prevent="toggleSkillInput" type="button" name="edit" )
      button.form__trash-btn(@click.prevent="delCurrentSkill" type="button" name="trash")
    .form__buttons(v-else)
      button.form__tick-btn(@click.prevent="updateCurrentSkill" type="button" name="add")
      button.form__remove-btn(@click.prevent="toggleSkillInput" type="button" name="remove")

</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: "SkillsItem",
    props: {
      skill: Object
    },
    data() {
      return {
        inputDisabled: true,
        editedSkill: {...this.skill}
      }
    },
    methods: {
      ...mapActions("tooltips", ["showTooltip", "closeTooltip"]),
      ...mapActions("skills", ["removeSkill", "editSkill"]),
      ...mapActions("categories", [ "fetchCategories"]),
      async updateCurrentSkill() {
        try {
          const {response} = await this.editSkill(this.editedSkill)
          this.toggleSkillInput()
          this.showTooltip({
            type: "success",
            text: "Изменено успешно!"
          })
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: `Не получилось...`
          })
        }
      },
      async delCurrentSkill() {
        try {
          await this.removeSkill(this.skill.id)
          this.showTooltip({
            type: "success",
            text: "Навык успешно удален!"
          })

        } catch (error) {
          this.showTooltip({
            type: "error",
            text: `Не получилось...`
          })

        }
        try {
          await this.fetchCategories()
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: `Не удалось получить данные.`
          })
        }
      },
      toggleSkillInput() {
        if (!this.inputDisabled) {
          this.editedSkill = {...this.skill}
        }
        this.inputDisabled = !this.inputDisabled
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
  //- About =================================== TITLE ======
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

  .form__trash-btn {
    width: 15px;
    height: 15px;
    border: none;
    background: svg-load("trash.svg", fill="#a0a5b1") center center no-repeat;
    background-size: auto 100%;
    cursor: pointer;

    &:hover {
      background: svg-load("trash.svg", fill="#5872b0") center center no-repeat;
      background-size: auto 100%;
    }
  }

  .form__edit-btn {
    width: 15px;
    height: 15px;
    border: none;
    background: svg-load("pencil.svg", fill="#a0a5b1") center center no-repeat;
    background-size: 100% auto;
    cursor: pointer;

    &:hover {
      background: svg-load("pencil.svg", fill="#5872b0") center center no-repeat;
      background-size: 100% auto;
    }
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

  //- PHONES ------------
  @include phones {
    .form__row-name {
      flex: 0.6;
      max-width: 60%;
    }

    .form__row-value-box {
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