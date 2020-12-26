import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/Login/index.vue'
import BasRoute from './modules/base'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path:"/Layout",
    name:'Layout',
    component:()=>import('@/Layout'),
    redirect:'/Dashboard',
    children:BasRoute
  }
];

const router = new VueRouter({
  routes
});

export default router;
