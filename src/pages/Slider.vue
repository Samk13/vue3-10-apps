<template>
  <div class="flex flex-wrap w-full">
    <div v-for="(color, index) in sliders" :key="index">
      <div
        v-if="currentSlide === index"
        class="absolute w-full h-96"
        :class="color"
      ></div>
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
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide === 2 ? (this.currentSlide = 0) : this.currentSlide++;
    }, 1000);
  },
  beforeUnmount() {
    this.interval = clearInterval(this.interval);
  },
};
</script>
