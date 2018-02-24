import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from './fb/firebase'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import swal from 'sweetalert'

Vue.use(VueFire)
Vue.use(Buefy)

Vue.config.productionTip = false
Vue.prototype.$fb = firebase
Vue.prototype.$swal = swal

export const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
