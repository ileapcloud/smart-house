import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/public/header'
import login from '@/components/login'
import index from '@/components/index'
import userManage from '@/components/User-manage'
import meterManage from '@/components/meter-manage'
import userInfo from '@/components/User-info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: header,
      children: [
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          path: '/userManage',
          name: 'userManage',
          component: userManage
        },
        {
          path: '/userInfo',
          name: 'userInfo',
          component: userInfo
        },
        {
          path: '/meterManage',
          name: 'meterManage',
          component: meterManage
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
