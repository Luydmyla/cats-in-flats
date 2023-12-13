import HomePage from "./pages/HomePage.vue";
import Cats from "./pages/Cats.vue";
import Contacts from "./pages/Contacts.vue";
import Donats from "./pages/Donats.vue";
import ErrorPage from "./pages/ErrorPage.vue";
// import {} from "module";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/cats-in-flats/",
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/cats-in-flats/cats",
    component: Cats,
    name: "cats",
  },
  {
    path: "/cats-in-flats/donats",
    component: Donats,
    name: "donats",
  },
  {
    path: "/cats-in-flats/contacts",
    component: Contacts,
    name: "contacts",
  },

  {
    path: "/cats-in-flats/:pathMatch(.*)",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
