import Vue from 'vue'
import VueTimeago from 'vue-timeago'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueTimeago)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
