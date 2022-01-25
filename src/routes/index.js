import { createWebHistory, createRouter } from "vue-router";
import Characters from '../views/Characters.vue';
import Home from '../components/Home.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/characters',
    component: Characters,
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;