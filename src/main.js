import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from './fb/firebase'

Vue.use(VueFire)

Vue.config.productionTip = false
Vue.prototype.$fb = firebase

export const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
