<template>
  <div id="nav">
    <span>Vue Router</span><a class="rightSide" href="https://github.com/null8r/vue-spa" target="_blank">README</a>
  </div>
  <div id="app">
    <router-link to="/" class="routerLink">home</router-link>
    <router-link to="/page1" class="routerLink">page1</router-link>
    <router-link to="/page2" class="routerLink">page2</router-link>
    <router-link to="/helloworld" class="routerLink">HelloWorld</router-link>

    <hr>

    <router-view class="routerView"></router-view>
  </div>
</template>

<script>
</script>

<style>
</style>
