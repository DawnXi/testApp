import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Detail from '@/components/Detail'
import Ratelist from '@/components/Ratelist'
import Shop from '@/components/Shop'
import Category from '@/components/Category'
import MyCenter from '@/components/MyCenter'
import Cart from '@/components/Cart'
import Search from '@/components/Search'
import vuextest from '@/components/vuextest'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/detail/:iid',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop 
    },
    {
      path: '/maincategory',
      name: 'Category',
      component: Category 
    },
    {
      path: '/mycenter',
      name: 'MyCenter',
       meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      component: MyCenter 
    },
    {
      path: '/cart',
      name: 'Cart',
       meta: {
            requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        },
      component: Cart 
    },
    {
      path: '/search',
      name: 'search',
      component:  Search
    },
    {
      path: '/ratelist/:iid',
      name: 'ratelist',
      component:  Ratelist
    },
    {
      path: '/vuextest',
      name: 'vuextest',
      component:  vuextest
    },
  ]
})
