import Vue from 'vue'
import VueRouter from 'vue-router'
import Decoration from "../views/Decoration";
import indoor from "../views/indoor";
Vue.use(VueRouter)

const routes = [
  {
    path: '/Decoration',
    name: 'Decoration',
    component: Decoration
  },
  {
    path: '/indoor',
    name: 'indoor',
    component: indoor
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
