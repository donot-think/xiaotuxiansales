// createRouter:创建router实例对象
// createWebHistory:创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/detail/index.vue'


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
