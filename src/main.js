// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
let app = null; //this is it test to see if app is null
/* eslint-disable no-new */
firebase.autho().onAuthStateChange(() => {
  //init if app is not already created
  if(!app){ // if the app is not null, then app is defind by vue
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
