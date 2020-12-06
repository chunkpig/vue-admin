import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss'
import './icons'
Vue.config.productionTip = false;
Vue.use(Element)
// Vue.use(Element, {
//   size: Cookies.get('size') || 'medium', // set element-ui default size
//   locale: enLang // 如果使用中文，无需设置，请删除
// })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
