import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      breadcrumbs: [
        { 
          name: 'Главная'} 
      ]
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    meta: {
      breadcrumbs: [
        { name: 'Главная', link: '/' },
        { name: 'Корзина' }
      ]
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
