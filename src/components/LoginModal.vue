<template>
  <section
    class=" z-20 h-screen w-screen bg-gray-900 fixed top-0 opacity-70"
    @click="$emit('close-login-modal')"
  ></section>
  <div class="absolute inset-0">
    <div class="flex justify-center h-full w-full items-center">
      <div class="z-30 bg-white p-5 rounded-3xl  ">
        <h1 class="text-2xl text-center py-5">Login</h1>
        <form
          class="mt-5 space-y-10 border-t border-dashed p-5 rounded-xl"
          @submit.prevent="submitForm"
        >
          <div>
            <label for="name">Email or username</label>
            <input
              id="name"
              v-model="form.name"
              placeholder="Email or password"
              class="rounded-xl shadow p-4 w-full"
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              placeholder="Password"
              class="rounded-xl shadow p-4 w-full"
            />
          </div>
          <button
            type="submit"
            class="rounded-xl shadow p-4 w-full text-xl bg-green-500 mt-10"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["close-login-modal"],
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      this.form;
    },
  },
};
</script>

<style></style>
