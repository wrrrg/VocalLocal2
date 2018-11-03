import Vue from 'vue'

Vue.googleAuth().signIn(function (authorizationCode) {

  // things to do when sign-in succeeds

  // You can send the authorizationCode to your backend server for further processing, for example
  this.$http.post('http://your/backend/server', { code: authorizationCode, redirect_uri: 'postmessage' }).then(function (response) {
    if (response.body) {
      // ...
    }
  }, function (error) {
    console.log(error)
  })

}, function (error) {
  // things to do when sign-in fails
))