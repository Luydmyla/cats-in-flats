import HomePage from "./pages/HomePage.vue";
import Cats from "./pages/Cats.vue";
import CatsInfo from "./pages/CatsInfo.vue";
import Contacts from "./pages/Contacts.vue";
import Donats from "./pages/Donats.vue";
import ErrorPage from "./pages/ErrorPage.vue";
// import {} from "module";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    // path: "/",
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/cats",
    // path: "/cats",
    component: Cats,
    name: "cats",
  },
  {
    path: "/catsinfo/:id",
    component: CatsInfo,
    name: "catsInfo",
  },
  {
    path: "/donats",
    component: Donats,
    name: "donats",
  },
  {
    path: "/contacts",
    component: Contacts,
    name: "contacts",
  },

  {
    path: "/:pathMatch(.*)",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = createRouter({
  history: createWebHistory("/cats-in-flats"),
  routes,
});

export default router;
