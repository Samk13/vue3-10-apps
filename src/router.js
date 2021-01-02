import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
const routes = [
  { path: "/", component: Home, alias: "/home" },
  { path: "/calendar", component: () => import("./pages/Calendar.vue") },
  { path: "/markdown", component: () => import("./pages/Markdown.vue") },
  { path: "/slider", component: () => import("./pages/Slider.vue") },
  { path: "/list-app", component: () => import("./pages/ListApp.vue") },
];

const Router = createRouter({
  history: createWebHistory(),
  routes,
});
export default Router;
