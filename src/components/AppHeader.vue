<template>
  <nav
    class="bg-green-500 space-x-2 w-full rounded-b-3xl font-bold p-5 text-3xl flex justify-between cursor-pointer"
  >
    <div>
      <router-link
        v-for="route in list"
        :key="route.title"
        class="p-2 text-base"
        :to="route.to"
        >{{ route.title }}</router-link
      >
    </div>
    <div @click="$emit('open-login-modal')">
      Login
    </div>
  </nav>
</template>

<script>
export default {
  emits: ["open-login-modal"],
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
