<template>
  <div class="container text-center text-3xl flex flex-col">
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
