<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomePage from "./components/HomePage.vue";
import PokemonInfoCard from "./components/PokemonInfoCard.vue";

@Component({
  components: {
    HomePage,
  },
})
export default class App extends Vue {}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
