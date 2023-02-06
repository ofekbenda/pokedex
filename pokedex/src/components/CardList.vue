<template>
  <div class="card-list">
    <card
      v-for="pokemon in pokemonsData"
      v-bind:key="pokemon.name"
      :id="pokemon.id"
      :name="pokemon.name"
      :imgSrc="pokemon.imgSrc"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Card from "./Card.vue";
import { Pokemon } from "./HomePage.vue";

@Component({
  components: {
    Card,
  },
})
export default class CardList extends Vue {
  @Prop() readonly pokemonsData!: Array<Pokemon>;

  selectPokemon(pokemon: Pokemon) {}
}
</script>

<style>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 8%;
}
</style>
