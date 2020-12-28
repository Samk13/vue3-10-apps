<template>
  <div class="m-auto">
    <h1 class="text-5xl font-black">
      Vue calendar
    </h1>
    <div class="flex justify-between">
      <h2>{{ currentMonthName }}</h2>
      <h2>{{ currentYear }}</h2>
    </div>
    <section class="flex  font-bold mt-5">
      <p class="w-36 h-10 text-center" v-for="day in days" :key="day">
        {{ day }}
      </p>
    </section>
    <hr class="mt-2" />
    <section class="flex flex-wrap font-bold mt-5">
      <p
        class="w-1/7 h-10 text-center"
        v-for="num in startDay()"
        :key="num"
      ></p>
      <div
        class="w-1/7 h-10 text-center border"
        v-for="num in daysInMonth()"
        :key="num"
        :class="currentDateClass(num)"
      >
        {{ num }}
      </div>
    </section>
    <section class="flex justify-between mt-4">
      <button
        @click="previous"
        class="px-4 py-3 border rounded-lg bg-green-400"
      >
        Previous
      </button>
      <button @click="next" class="px-4 py-3 border rounded-lg bg-green-400">
        next
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      // currentMonthName: new Date().toLocaleString("default", {
      //   month: "long",
      // }),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", " Friy", "Sat"],
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    previous() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateClass(num) {
      const calelenderFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calelenderFullDate === currentFullDate
        ? "text-red-900 bg-green-400"
        : null;
    },
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    },
  },
};
</script>
