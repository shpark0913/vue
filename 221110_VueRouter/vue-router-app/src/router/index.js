import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView'
import DetailView from '@/views/DetailView'
import LoginView from '@/views/LoginView'
import NotFound404 from '@/views/NotFound404'
import DogView from '@/views/DogView'


Vue.use(VueRouter)

const isLoggedin = true

const routes = [

  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/detail',
    name: 'detail',
    component: DetailView
  },

  {
    path: '/hello/:userName',
    name: 'hello',
    component: HelloView
  },

  {
    path: '/dog/:breed',
    name: 'dog',
    component: DogView
  },

  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView,

    // 라우터 가드
    beforeEnter(to, from, next) {
      if (isLoggedin === true) {
        console.log('이미 로그인 했지롱');
        next({ name: 'home' })
      } else {
        next()
      }
    }
  },

  {
    path: '*',
    redirect: '/404'
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 전역 가드
// router.beforeEach((to, from, next) => {
//   // 로그인 여부
//   const isLoggedin = false

//   // 로그인이 필요한 페이지
//   const authPages = ['hello']

//   // 앞으로 가는 주소가 인증이 필요한가?
//   const isAuthRequired = authPages.includes(to.name)

//   if (isAuthRequired && !isLoggedin) {
//     next({ name: 'login' })
//   } else {
//     next()
//   }
// })

export default router
