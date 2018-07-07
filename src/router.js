import Vue from 'vue'
import Router from 'vue-router'
import TheOperationsLog from './views/TheOperationsLog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'operationsLog',
      component: TheOperationsLog
    },
  ]
})
