import { router } from "./router.js"

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