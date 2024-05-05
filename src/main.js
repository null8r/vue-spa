import { createApp } from 'vue';
import App from './App.vue';
import Router from "./Router.js"
import "./css/style.css"

createApp(App).use(Router).mount('#app')
