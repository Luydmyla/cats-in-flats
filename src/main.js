import "./assets/main.css";
import router from "./router.js";
import App from "./App.vue";
import { createApp } from "vue";
// import VueRouter from "vue-router";
// import App from "./App.vue";

// import router from "./router.js";
// import Notifications from "@kyvg/vue3-notification";
// import store from "./store/index.js";

// createApp(App).use(VueRouter).mount("#app");
createApp(App).use(router).mount("#app");
