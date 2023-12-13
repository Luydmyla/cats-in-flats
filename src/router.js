import HomePage from "./pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/cats-in-flats",
    component: HomePage,
    name: "homepage",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
