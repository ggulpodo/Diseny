import { createWebHistory, createRouter } from "vue-router";
import Characters from '../views/Characters.vue';

const routes = [
  {
    path: "/characters",
    component: Characters,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;