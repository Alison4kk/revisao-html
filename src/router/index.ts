import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Catalogo1View from '../views/Catalogo1View.vue'
import Titulos1View from '../views/Titulos1View.vue'
import FormatosTexto2View from '../views/FormatosTexto2View.vue'
import ItemsFormatados3View from '../views/ItemsFormatados3View.vue'
import Tabela4View from '../views/Tabela4View.vue'
import Formulario8View from '../views/Formulario8View.vue'
import Formulario9View from '../views/Formulario9View.vue'
import Formulario10View from '../views/Formulario10View.vue'
import Formulario11View from '../views/Formulario11View.vue'
import Formulario13View from '../views/Formulario13View.vue'
import Formulario14View from '../views/Formulario14View.vue'
import Formulario15View from '../views/Formulario15View.vue'
import Formulario16View from '../views/Formulario16View.vue'
import Formulario17View from '../views/Formulario17View.vue'
import Formulario18View from '../views/Formulario18View.vue'
import Formulario19View from '../views/Formulario19View.vue'
import Formulario20View from '../views/Formulario20View.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {path: '/', name: 'home' ,component: HomeView},
  {path: '/0-catalogo', component: Catalogo1View},
  {path: '/1-titulos', component: Titulos1View},
  {path: '/2-fomratos-texto',  component: FormatosTexto2View},
  {path: '/3-itens-formatados', component: ItemsFormatados3View},
  {path: '/4-tabela', component: Tabela4View},
  {path: '/8-formulario', component: Formulario8View},
  {path: '/9-login', component: Formulario9View},
  {path: '/10-login', component: Formulario10View},
  {path: '/11-pagina', component: Formulario11View},
  {path: '/13-pagina', component: Formulario13View},
  {path: '/14-pagina', component: Formulario14View},
  {path: '/15-pagina', component: Formulario15View},
  {path: '/16-pagina', component: Formulario16View},
  {path: '/17-pagina', component: Formulario17View},
  {path: '/18-pagina', component: Formulario18View},
  {path: '/full/19-pagina', component: Formulario19View},
  {path: '/full/20-pagina', component: Formulario20View},
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
