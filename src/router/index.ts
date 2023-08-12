import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Catalogo1View from '../views/Catalogo1View.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {path: '/', name: 'home', component: HomeView},
  {path: '/0-catalogo', name: '0-catalogo', component: Catalogo1View},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
