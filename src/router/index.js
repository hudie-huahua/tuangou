import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import List from '@/components/List'
import Detail from '@/components/Detail'
import Baidu from '@/components/Baidu'
import resource from 'vue-resource'


Vue.use(Router)
Vue.use(resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/List/type/:id',
      name: 'List',
      component: List
    },{
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    },{
      path: '/Baidu',
      name: 'Baidu',
      component: Baidu
    }
  ]
})
