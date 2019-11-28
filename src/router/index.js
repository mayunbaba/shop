import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


let Category = ()=> import('../views/Category.vue');
let Cart = ()=> import('../views/Cart.vue');
let Profile = ()=> import('../views/Profile.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
