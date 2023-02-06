<template>
  <div class="card-container" @click="setPokemonName">
    <div class="pokemon-id">{{ parseIndex(id) }}</div>
    <img :src="`${imgSrc}`" />
    <div class="pokemon-name">{{ name }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { selectedPokemonModule } from "../store/index";

@Component({})
export default class Card extends Vue {
  @Prop() readonly id!: number;
  @Prop() readonly name!: string;
  @Prop() readonly imgSrc!: string;

  public setPokemonName() {
    selectedPokemonModule.setSelectedPokemon(this.name);
  }

  parseIndex(id: number): string {
    return `#${id.toLocaleString("en-US", {
      minimumIntegerDigits: 3,
    })}`;
  }
}
</script>
<style lang="scss" scoped>
.card-container {
  background-color: $light-grey;
  box-shadow: 2px 2px 4px rgb(0 0 0 / 15%);
  margin: 16px 13px;
  width: 240px;
  height: 255px;
  display: flex;
  flex-direction: column;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;
  transition-property: height, width, margin;
  transition: all 0.25s ease-in;
}
.card-container:hover {
  cursor: pointer;
  position: relative;
  height: 265px;
  transition: all 0.25s ease-in;
  width: 250px;
  /* transition: width 0.25s ease-in; */
  margin: 11px 8px;
  /* transition: margin 0.25s ease-in; */
  transition-property: height, width, margin;
}
.pokemon-id {
  margin: 10px 16px;
  display: flex;
  font-size: 1.375rem;
}
.pokemon-name {
  font-size: 1.375rem;
  margin-bottom: 14px;
}
</style>
