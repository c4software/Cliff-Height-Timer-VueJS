// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {i18n} from './i18n'
import Vuetify from 'vuetify'

Vue.config.productionTip = true

// Vuetify
require('vuetify/dist/vuetify.min.css')
Vue.use(Vuetify)

const init = () => {
  return new Vue({
    el: '#app',
    router,
    i18n,
    template: '<App/>',
    components: { App }
  })
}

init()
