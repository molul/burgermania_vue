import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartaView from '../views/CartaView.vue'
import NosotrosView from '../views/NosotrosView.vue'
import BurgerDelMesView from '../views/BurgerDelMesView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/carta',
		name: 'carta',
		component: CartaView
	},
	{
		path: '/nosotros',
		name: 'nosotros',
		component: NosotrosView
	},
	{
		path: '/burger-del-mes',
		name: 'burger-del-mes',
		component: BurgerDelMesView
	},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
	scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
