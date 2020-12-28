<template>
  <div>
    <h2 class="text-4xl font-black mb-3">Markdown</h2>
    <section class="flex w-full bg-gray-800 text-white">
      <article class="w-1/2 h- border-r h-screen">
        <textarea
          :value="text"
          @input="updateText"
          class="w-full h-full bg-gray-800 text-3xl"
        ></textarea>
      </article>
      <article class="w-1/2 border-l bg-gray-700" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import { debounce } from "../utilities/mixins/debounce";
export default {
  mixins: [debounce],
  data() {
    return {
      text: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    updateText(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
};
</script>
