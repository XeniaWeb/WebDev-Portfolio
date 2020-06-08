<template lang="pug">
  form
    .form__header
      input.form__title.about__form-title(
        name="name"
        v-model="editedCategory.category"
        :disabled="inputDisabled"
        value="Frontend"
        placeholder="Название новой группы"
      )
      .form__buttons(v-if="inputDisabled" )
        button.form__edit-btn(@click.prevent="toggleInput" type="button" name="edit" )
        button.form__trash-btn(@click.prevent="delCurrentCategory" type="button" name="trash")
      .form__buttons(v-else)
        button.form__tick-btn(@click.prevent="updateCurrentCategory" type="button" name="add")
        button.form__remove-btn(@click.prevent="toggleInput" type="button" name="remove")
    hr.form__divider
    ul.form__content
      SkillsItem(
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      )

    .form__controls
      input.form__controls-name(
        v-model="skill.title"
        name="name"
        type="text"
        placeholder="Новый навык"
        disabled=false
      )
      .form__controls-value-box
        input.form__controls-value(
          v-model="skill.percent"
          name="name"
          type="number"
          min="0"
          max="100"
          placeholder=""
          disabled=false
        )
      button.form__controls-btn(@click.prevent="addNewSkill" disabled=false)
        .add-btn__icon.add-btn__icon--form +


</template>

<script>
  import {mapActions} from 'vuex'
  import SkillsItem from "./SkillsItem";

  export default {
    name: "SkillsGroup",
    props: {
      category: {
        type: Object,
        default: () => {
        },
        required: true
      },
      skills: {
        type: Array,
        default: () => [],
        required: true
      }
  },
  data() {
    return {
      inputDisabled: true,
      editedCategory: {...this.category},
      skill: {
        category: this.category.id,
        title: "",
        percent: ""
      }
    }
  },
  components: {
    SkillsItem
  },
  methods: {
      ...mapActions("tooltips", ["showTooltip", "closeTooltip"]),
      ...mapActions("categories", ["addSkill", "updateCategory", "removeCategory", "fetchCategories"]),
      async addNewSkill() {
        const skillData = {...this.skill}
        try {
          await this.addSkill(skillData)
          this.skill.title = ""
          this.skill.percent = ""
          this.showTooltip({
            type: "success",
            text: "Успешно!"
          })
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: "Не получилось..."
          })
        }
      },
      async updateCurrentCategory() {
        console.log(this.editedCategory.title, this.editedCategory.category)
        this.editedCategory.title = this.editedCategory.category;

        try {
          const {response} = await this.updateCategory(this.editedCategory)
          this.toggleInput();
          this.showTooltip({
            type: "success",
            text: "Изменения сохранены!"
          })
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: "Не получилось..."
          })
        }
        try {
          await this.fetchCategories()
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: `Не получилось: ${error.message}`
          })
        }
      },
      async delCurrentCategory() {
        try {
          const {response} = await this.removeCategory(this.editedCategory.id)
          this.showTooltip({
            type: "success",
            text: "Категория удалена!"
          })
        } catch (error) {
          this.showTooltip({
            type: "error",
            text: `Не получилось: ${error.message}`
          })
        }
      },

      toggleInput() {
        if (!this.inputDisabled) {
          this.editedCategory = {...this.category}
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

    &:hover {
      background: linear-gradient(to left, $color-blue-hover 0, $color-blue-deep 100%);
    }
  }

  //- About =================================== CONTENT ======

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
    .form__controls-name {
      flex: 0.6;
      max-width: 60%;
    }

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