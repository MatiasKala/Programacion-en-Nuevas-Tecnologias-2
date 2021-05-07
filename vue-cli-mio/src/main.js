import Vue from 'vue'
import App from './App.vue'

import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js'
import 'bulma/css/bulma.css'

import { router } from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
