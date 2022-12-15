import { createRouter, createWebHistory } from "vue-router";
import LogIn from '../views/LogIn.vue';
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Configurator from '../views/Configurator.vue'
import OrderOk from '../views/OrderOk.vue'
import ChangePassword from '../components/ChangePassword.vue';
import DonutDetails from '../views/DonutDetails.vue';

const routes = [
  { path: "/", component: Home },
  { path: "/gallerij", component: Gallery },
  { path: "/configurator", component: Configurator },
  { path: "/login", component: LogIn },
  { path: "/details/:id", component: DonutDetails },
  { path: "/instellingen", component: ChangePassword },
  { path: "/order", component: OrderOk },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;