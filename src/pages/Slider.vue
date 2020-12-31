<template>
  <div class="relative">
    <div v-for="(color, index) in sliders" :key="index">
      <transition
        enter-active-class="transition-all duration-700 ease-out-quad"
        leave-active-class="transition-all duration-700 ease-in-quad"
        enter-from-class=" transform -translate-x-full"
        leave-to-class=" transform translate-x-full"
        mode="out-in"
      >
        <div
          v-if="currentSlide === index"
          :key="index"
          class="absolute w-screen h-96 rounded-3xl"
          :class="color"
        ></div>
      </transition>
    </div>
    <div class="relative h-96">
      <div class="absolute bottom-10 flex justify-center w-full">
        <div
          v-for="(slider, index) in sliders"
          :key="slider"
          class="w-4 h-4 rounded-full ml-2 transition-all duration-500 cursor-pointer shadow-md"
          :class="currentSlide === index ? 'bg-gray-500' : 'bg-gray-900'"
          @click="makeActive(index)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 1,
      interval: "",
      sliders: ["bg-green-900", "bg-yellow-400", "bg-blue-600"],
      isTitleShowing: true,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide === 2 ? (this.currentSlide = 0) : this.currentSlide++;
    }, 2000);
  },
  beforeUnmount() {
    this.interval = clearInterval(this.interval);
  },
  methods: {
    makeActive(index) {
      this.currentSlide = index;
    },
  },
};
</script>
