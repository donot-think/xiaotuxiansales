// createRouter:创建router实例对象
// createWebHistory:创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartStore from '@/views/CartStore/index.vue'
import CheckOut from '@/views/CheckOut/index.vue'
import Pay from '@/views/Pay/index.vue'
import payBack from '@/views/Pay/payBack.vue'
import User from '@/views/User/index.vue'
import UserOrder from '@/views/User/components/UserOrder.vue'
import UserInfo from '@/views/User/components/UserInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path:'/',
    component:Layout,
      children:[
        {
          path:'',
          component:Home
        },
        {
          path:'category/:id',
          component:Category
        },
        {
          path:'category/sub/:id',
          component:SubCategory
        },
        {
          path:'detail/:id',
          component:Detail
        },{
          path:'CartStore',
          component:CartStore
        },
        {
          path:'CheckOut',
          component:CheckOut
        },
        {
          path:'Pay',
          component:Pay
        },
        {
          path:'paycallback',
          component:payBack
        },
        {
          path:'/User',
          component:User,
          children:[
            {
              path:'',
              component:UserInfo,
            },
            {
              path:'UserOrder',
              component:UserOrder,
            }
          ]
        }
      ]
   },
   {
    path:'/login',
    component:Login
   },
  ],
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // 返回 y = 0，代表滚动条在最上方
    return {
      top:0
    }
  }

})

export default router
