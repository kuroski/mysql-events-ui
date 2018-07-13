import Vue from 'vue'
import VueTimeago from 'vue-timeago'
import { Timeline } from 'vue2vis'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue2vis/dist/vue2vis.css'

Vue.config.productionTip = false
Vue.use(VueTimeago)
Vue.component('timeline', Timeline)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
