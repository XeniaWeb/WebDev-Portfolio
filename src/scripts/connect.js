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
      overlayHidden: true,
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
        this.messageError = 'Слишком короткое имя'
      } else {
        this.messageValid = true
        this.messageError = ''
      }
      return this.messageValid
    },
    submitForm() {
      var userNameValid = this.validateName(),
          userEmailValid=  this.validateEmail(),
          messageValid =  this.validateMessage()
      if (userNameValid && userEmailValid && messageValid) {
        var userData = {
          username: this.userName,
          email: this.userEmail,
          message: this.message
        }
        fetch('src/data/success.txt', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(userData)
        }).then((response) => {
          this.resultMassage = "Сообщение отправлено!"
          this.overlayHidden = false
          setTimeout(this.hideOverlay, 3000)
        })
      }
    },
    hideOverlay() {
      this.overlayHidden = true
    }
   }
})