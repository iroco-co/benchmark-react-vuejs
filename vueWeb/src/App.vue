<template>
  <div id="app" class="App">
    <div class="frame">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
  import Header from "@/modules/navigation/header";
  import {getCLS, getFCP, getFID, getLCP, getTTFB} from "web-vitals"

  export default {
    name: 'App',
    components: {
      Header
    },
    created: function () {
      getCLS(this.sendToAnalytics)
      getFCP(this.sendToAnalytics)
      getFID(this.sendToAnalytics)
      getLCP(this.sendToAnalytics)
      getTTFB(this.sendToAnalytics)
    },
    methods: {
      sendToAnalytics (metric) {
        const body = JSON.stringify({[metric.name]: metric.value})
        fetch('/analytics', {body, method: 'POST', headers: {'Content-Type': 'application/json'}, keepalive: true})
      }
    }
  }
</script>
