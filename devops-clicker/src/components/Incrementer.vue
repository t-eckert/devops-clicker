<template>
  <div>
    <div class="score">{{ score }}</div>
    <button @click="increment()">{{ target }}</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Incrementer",

  props: {
    target: { type: String, required: true },
    score: { type: Number, required: true, default: 0 },
  },

  methods: {
    increment() {
      this.$store.commit(`increment${this.target}`);
    },
  },
});
</script>
