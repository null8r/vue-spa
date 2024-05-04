<!-- not use -->
<script>
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
</script>