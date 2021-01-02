<template>
  <h1 class="text-4xl font-bold mb-5">ListApp!</h1>
  <h1 class="text-4xl font-bold mb-5">List number= {{ listCount.get }}</h1>
  <transition-group
    enter-active-class="transition-all duration-1000 ease-out-quad"
    leave-active-class="transition-all duration-1000 ease-in-quad"
    enter-from-class="opacity-50 transform -translate-y-10"
    leave-to-class="opacity-50 transform translate-y-full"
    tag="div"
  >
    <ul
      class="text-2xl flex justify-between transition-all"
      v-for="(list, index) in lists"
      :key="list.name"
    >
      <li
        class="p-5 border w-1/2 mb-2 rounded-3xl hover:bg-green-500 transition-all duration-200 flex justify-between"
      >
        <div>
          {{ list.name }}
        </div>
        <div
          class="cursor-pointer bg-white border shadow-md p-2 rounded-3xl w-10 h-10 flex justify-center"
          v-on:click="remove(index)"
        >
          <div class="font-bold self-center">
            X
          </div>
        </div>
      </li>
    </ul>
  </transition-group>
  <form class="mt-10" @submit.prevent="addToList">
    <div class="flex w-1/2 focus:outline-none ">
      <input
        class="focus:outline-none focus:ring-2 focus:ring-green-600 p-5 border w-full mb-2 rounded-3xl focus:bg-green-200 text-2xl transition-colors duration-500"
        v-model="newHero"
        placeholder="Type Hero Name Here"
        ref="newHeroRef"
      />
      <button
        class="focus:outline-none focus:ring-2 focus:ring-green-600 border border-black rounded-3xl w-1/3 bg-gradient-to-r from-green-700 to-green-500 text-white ml-2 px-2 shadow-md font-bold"
        type="submit"
      >
        Add to list
      </button>
    </div>
  </form>
</template>

<script>
import { computed, ref, onMounted } from "vue";

export default {
  setup() {
    let lists = ref([
      { name: "Ashlea Weston" },
      { name: "Elsie Wilcox" },
      { name: "Harlow Gough" },
      { name: "Astrid Flower" },
      { name: "Alvin Mckenna" },
    ]);
    const newHero = ref("");

    function remove(index) {
      lists.value = lists.value.filter((hero, i) => i != index);
    }
    const addToList = () => {
      if (newHero.value !== "") {
        lists.value.unshift({ name: newHero.value });
        newHero.value = "";
      }
    };
    const listCount = computed(() => ({ get: lists.value.length }));
    const newHeroRef = ref(null);
    onMounted(() => {
      newHeroRef.value.focus();
    });
    return { lists, newHero, remove, addToList, listCount, newHeroRef };
  },
};
</script>
