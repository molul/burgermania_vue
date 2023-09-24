import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CartaView from "../views/CartaView.vue";
import ReservaView from "../views/ReservaView.vue";
import NosotrosView from "../views/NosotrosView.vue";
import ContactoView from "../views/ContactoView.vue";
import PideView from "../views/PideView.vue";
import BurgerDelMesView from "../views/BurgerDelMesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/carta",
    name: "carta",
    component: CartaView,
  },
  {
    path: "/reserva",
    name: "reserva",
    component: ReservaView,
  },
  {
    path: "/nosotros",
    name: "nosotros",
    component: NosotrosView,
  },
  {
    path: "/contacto",
    name: "contacto",
    component: ContactoView,
  },
  {
    path: "/burger-del-mes",
    name: "burger-del-mes",
    component: BurgerDelMesView,
  },
  {
    path: "/pide",
    name: "pide",
    component: PideView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
