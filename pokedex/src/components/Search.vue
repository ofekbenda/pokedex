<template>
  <div class="search-container">
    <form @submit.prevent="filterPokemons">
      <input class="search-area" v-model="searchTextInput" />
      <Button text="Search" clickHandler="" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";
import Button from "./Button.vue";

@Component({
  components: {
    Button,
  },
})
export default class Search extends Vue {
  public searchTextInput: string = "";

  @Emit()
  filterPokemons() {
    return this.searchTextInput;
  }
}
</script>
<style lang="scss" scoped>
.search-area {
  border: 1px solid rgba(2, 1, 102, 0.5);
  background-color: $light-grey;
  box-sizing: border-box;
  border-radius: 9px;
  height: 36px;
  width: max(26%, 200px);
  margin-right: 6px;
}
.search-container {
  margin-bottom: 33px;
}
</style>
