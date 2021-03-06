import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../components/SignIn'
import Cart from '../views/Cart.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/signIn',
        name: 'SignIn',
        component: SignIn,
        beforeEnter: (to, from, next) => {
          if (localStorage.getItem('token')) {
            next('/')
          } else {
            next()
          }
        }
      }
    ]
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('token')) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
