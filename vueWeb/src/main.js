import Vue from "vue";
import VueRouter from "vue-router";
import Mails from "./modules/mails/landing";
import App from "./App.vue";
import "@/App.scss";

Vue.config.productionTip = false

Vue.use(VueRouter)

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
})

new Vue({ router, render: (h) => h(App) }).$mount("#app")

function sendToAnalytics(metric) {
  const body = JSON.stringify({[metric.name]: metric.value});
  fetch('/analytics', {body, method: 'POST',  headers: {'Content-Type': 'application/json'}, keepalive: true});
}

router.beforeEach(async () => {
  try {
    const {
      getCLS,
      getFCP,
      getFID,
      getLCP,
      getTTFB
    } = await import("web-vitals")
    getCLS(sendToAnalytics);
    getFCP(sendToAnalytics);
    getFID(sendToAnalytics);
    getLCP(sendToAnalytics);
    getTTFB(sendToAnalytics);
  } catch (err) {
    console.error("[vue-web-vitals]", err);
  }
})