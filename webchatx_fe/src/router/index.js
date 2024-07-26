import { createWebHistory, createRouter } from "vue-router";

import LoginView from "@/views/login/index.vue";
import HomeView from "@/views/home/index.vue";
import NotFoundView from "@/views/notfound/index.vue";

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: LoginView },
  { path: "/home", component: HomeView },
  { path: "/:pathMatch(.*)*", component: NotFoundView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
