<template>
  <div id="app">
    <Incrementer target="Dev" :score="dev" />
    <Incrementer target="Ops" :score="ops" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Incrementer from "./components/Incrementer.vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "app",

  components: {
    Incrementer,
  },

  computed: mapState(["dev", "ops"]),
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
