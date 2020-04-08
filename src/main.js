import Vue from 'vue'
import App from './App.vue'
import  "@/helper/FilterDemo"

import VueRouter from "vue-router";
import routers from "./router/router";

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({routers})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
