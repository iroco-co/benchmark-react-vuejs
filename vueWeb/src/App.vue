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

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>
