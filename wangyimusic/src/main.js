import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "@/style/index.scss"

import "lib-flexible"; //1. 淘宝适配必须引入的  引入js文件 

import "@/utils/global"; // 注册全局组件
import "@/utils/vant";
import {axios} from "@/utils/axios"

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
