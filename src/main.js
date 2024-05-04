const routes = [
  { path: "/", component: httpVueLoader("./src/components/index.vue") },
  { path: "/page1", component: httpVueLoader("./src/components/page1.vue") },
  { path: "/page2", component: httpVueLoader("./src/components/page2.vue") }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(), //URLに/#/が入る(URLのコピーして共有が可・SEO不利) example.com/#/home
  //history: VueRouter.createWebHistory(), //URL/#/が入らないが、直接アクセスすると404になる(URLのコピーして共有が不可) example.com/home
  routes
});

const app = Vue.createApp({});

app.component("v-nav", {
  template: `
    <router-link to="/" class="routerLink">home</router-link>
    <router-link to="/page1" class="routerLink">page1</router-link>
    <router-link to="/page2" class="routerLink">page2</router-link>

    <hr>
  `
});

// 使用不可
// app.component("v-nav", {
//   template: httpVueLoader("./src/App.vue")
// });

app.use(router);
app.mount("#app");