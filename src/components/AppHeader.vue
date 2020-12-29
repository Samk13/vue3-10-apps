<template>
  <nav class="bg-green-400 space-x-2 font-bold ml-2 p-5 text-3xl">
    <router-link
      v-for="route in list"
      :key="route.title"
      class="p-2"
      :to="route.to"
      >{{ route.title }}</router-link
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" },
      ],
    };
  },
};
</script>
