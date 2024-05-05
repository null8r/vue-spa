import { createRouter, createWebHistory } from "vue-router"
import Home from "./components/index.vue"
import Page1 from "./components/page1.vue"
import Page2 from "./components/page2.vue"
import HelloWorld from "./components/HelloWorld.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/page1", component: Page1 },
  { path: "/page2", component: Page2 },
  { path: "/helloworld", component: HelloWorld },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;