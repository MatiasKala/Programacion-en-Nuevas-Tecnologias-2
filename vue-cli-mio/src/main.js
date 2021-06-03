import Vue from 'vue'
import App from './App.vue'

import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'
import 'bulma/css/bulma.css'

//Trae el router al proyecto general
import { router } from './router'

//Trae el vue-forms al proyecto general
import './form'

//Trae el axios al proyecto general
import './httpClient'

import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
