import Vue from "vue"

new Vue({
  el: '#connect-form',
  template: '#connect-template',
  components: '',
  data: {
      userName: '',
      userEmail: '',
      message: '',
      userNameValid: true,
      userEmailValid: true,
      messageValid: true,
      userNameError: '',
      userEmailError: '',
      messageError: '',
      overlayVisible: false,
      resultMassage: ''
  },
  methods: {
    validateName() {
      this.userName = this.$el.querySelector('.form__input--user-name').value
      if(this.userName.length < 3 ) {
        console.log(this.userName.length)
        this.userNameValid = false
        this.userNameError = 'Слишком короткое имя'
      } else {
        this.userNameValid = true
        this.userNameError = ''
      }
      return this.userNameValid
    },
    validateEmail() {
      var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.userEmail = this.$el.querySelector('.form__input--user-email').value
      if (this.userEmail.length < 8 ) {
        this.userEmailValid = false
        this.userEmailError = 'Слишком короткий Email'
      } else if (!regex.test(this.userEmail)) {
        this.userEmailValid = false
        this.userEmailError = 'Неверный Email'
      } else {
        this.userEmailValid = true
        this.userEmailError = ''
      }
      return this.userEmailValid
    },
    validateMessage() {
      this.message = this.$el.querySelector('.form__message').value
      if(this.message.length < 20 ) {
        this.messageValid = false
        this.messageError = 'Слишком мало букв'
      } else {
        this.messageValid = true
        this.messageError = ''
      }
      return this.messageValid
    },
    submitForm() {
      var userNameValid = this.validateName(),
          userEmailValid=  this.validateEmail(),
          messageValid =  this.validateMessage(),
          form = document.getElementById('#connectForm')

      if (userNameValid && userEmailValid && messageValid) {
        var userData = {
          username: this.userName,
          email: this.userEmail,
          message: this.message
        }
        fetch("./success.txt", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(userData)
        }).then((response) => {
          this.resultMassage = "Всё Ok! Привет семье!"
          this.overlayVisible = true
          setTimeout(this.hideOverlay, 3000)
        })
      }
    },
    hideOverlay() {
      this.overlayVisible = false
    }
   }
})