<template>
  <div class="container m-auto">
    <AppHeader class="mb-10" />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>
