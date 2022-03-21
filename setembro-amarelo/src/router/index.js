import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicial from '../views/PaginaInicial.vue'
import ListaGeral from '../views/ListaGeral.vue'
import QuemSomos from '../views/QuemSomos.vue'
import FaleConosco from '../views/FaleConosco.vue'
import MensagemRecebida from '../views/MensagemRecebida.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PaginaInicial',
    component: PaginaInicial
  },
  {
    path: '/ListaGeral',
    name: 'ListaGeral',
    component: ListaGeral
  },
  {
    path: '/QuemSomos',
    name: 'QuemSomos',
    component: QuemSomos
  },
  {
    path: '/FaleConosco',
    name: 'FaleConosco',
    component: FaleConosco
  },
  {
    path: '/MensagemRecebida',
    name: 'MensagemRecebida',
    component: MensagemRecebida
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
