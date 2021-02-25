import Vue from "vue";
import VueRouter from "vue-router";
import Mails from "./modules/mails/landing";
import App from "./App.vue";
import "@/App.scss";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Mails,
    },
    {
      path: "/:mail",
      component: Mails,
    },
  ],
});

new Vue({ router, render: (h) => h(App) }).$mount("#app");
