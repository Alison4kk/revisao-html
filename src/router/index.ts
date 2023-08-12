import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Catalogo1View from '../views/Catalogo1View.vue'
import Titulos1View from '../views/Titulos1View.vue'
import FormatosTexto2View from '../views/FormatosTexto2View.vue'
import ItemsFormatados3View from '../views/ItemsFormatados3View.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {path: '/', name: 'home', component: HomeView},
  {path: '/0-catalogo', component: Catalogo1View},
  {path: '/1-titulos', component: Titulos1View},
  {path: '/2-fomratos-texto',  component: FormatosTexto2View},
  {path: '/3-itens-formatados', component: ItemsFormatados3View},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
