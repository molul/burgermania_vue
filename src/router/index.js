import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NosotrosView from '../views/NosotrosView.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/nosotros',
		name: 'nosotros',
		component: NosotrosView
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
