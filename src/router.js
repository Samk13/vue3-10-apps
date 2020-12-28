import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
const routes = [
  { path: "/", component: Home, alias: "/home" },
  { path: "/calendar", component: () => import("./pages/Calendar.vue") },
  { path: "/Markdown", component: () => import("./pages/Markdown.vue") },
];

const Router = createRouter({
  history: createWebHistory(),
  routes,
});
export default Router;
