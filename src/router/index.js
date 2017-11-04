import Vue from 'vue'
import Router from 'vue-router'
import BoardComponent from '@/components/BoardComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Board',
    component: BoardComponent
  }]
})
