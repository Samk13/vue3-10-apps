<template>
  <div class="container m-auto">
    <AppHeader class="mb-10" @open-login-modal="() => (isLoginOpen = true)" />
    <router-view></router-view>
  </div>
  <login-modal
    v-if="isLoginOpen"
    @close-login-modal="() => (isLoginOpen = false)"
  />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    LoginModal,
  },
  data() {
    return {
      isLoginOpen: false,
    };
  },
};
</script>
