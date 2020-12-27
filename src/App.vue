<template>
  <div class="container text-center text-3xl flex flex-col">
    <AppHeader class="mb-10" />
    <calendar />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Calendar from "./components/Calendar";
export default {
  name: "App",
  components: {
    Calendar,
    AppHeader,
  },
  data: () => {
    return {
      text: "hello from Sam!",
    };
  },
  computed: {},
};
</script>
