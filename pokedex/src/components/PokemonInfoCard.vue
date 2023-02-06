<template>
  <div class="info-card-container">
    <div class="graphical-info-container">
      <div class="pokemon-id">{{ parseIndex(pokemonInfo.id) }}</div>
      <img :src="`${pokemonInfo.imgSrc}`" />
      <div class="pokemon-name">{{ pokemonInfo.name }}</div>
      <div class="types-container">
        <div
          class="type"
          :style="{ 'background-color': getTypeBackground(type) }"
          v-for="type in pokemonInfo.typesList"
          :key="type"
        >
          {{ type }}
        </div>
      </div>
    </div>

    <div class="divider" />

    <div class="textual-info-container">
      <div class="description-container">
        <div class="title">Description</div>
        <p>{{ pokemonInfo.description }}</p>
      </div>

      <div class="stats-container">
        <div class="title">Stats</div>
        <div class="stats-list">
          <p class="stat">HP: {{ pokemonInfo.hp }}</p>
          <p>Attack: {{ pokemonInfo.attack }}</p>
          <p>Defense: {{ pokemonInfo.defense }}</p>
          <p>Special Atk: {{ pokemonInfo.specialAttack }}</p>
          <p>Special Def: {{ pokemonInfo.specialDefense }}</p>
          <p>Speed: {{ pokemonInfo.speed }}</p>
          <p>Total: {{ this.calcTotal() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Prop, Vue } from "vue-property-decorator";
import { IPokemonInfo } from "../Utils/types";

@Component({})
export default class PokemonInfoCard extends Vue {
  @Prop() readonly pokemonInfo!: IPokemonInfo;

  calcTotal() {
    return (
      this.pokemonInfo.hp +
      this.pokemonInfo.attack +
      this.pokemonInfo.defense +
      this.pokemonInfo.specialAttack +
      this.pokemonInfo.specialDefense +
      this.pokemonInfo.speed
    );
  }

  parseIndex(id: number): string {
    return `#${id.toLocaleString("en-US", {
      minimumIntegerDigits: 3,
    })}`;
  }

  getTypeBackground(type: string) {
    switch (type.toLowerCase()) {
      case "grass":
        return "#7ac74c";
      case "poison":
        return "#373299";
      case "fire":
        return "#7F1F0E";
      case "flying":
        return "#10879D";
      default:
        return "#373299";
    }
  }
}
</script>

<style lang="scss" scoped>
.info-card-container {
  display: flex;
  background-color: $light-grey;
  border-radius: 9px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
  color: $purple;
  justify-content: space-between;
  padding: 14px;
  width: 70%;
  margin-bottom: 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}
.textual-info-container {
  width: 70%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
}
.graphical-info-container {
  width: 30%;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
}

.description-container {
  margin-bottom: 46px;
  width: 60%;
  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
    width: 100%;
  }
}
.pokemon-id {
  display: flex;
  font-size: 1.375rem;
  line-height: 1.625rem;
}
.pokemon-name {
  font-size: 2rem;
  line-height: 2.3125rem;
}
div.types-container {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.stats-list {
  column-count: 3;
  @media only screen and (max-width: 768px) {
    column-count: 1;
  }
}
p,
.title {
  margin: 0;
  text-align: left;
  @media only screen and (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
}
.title {
  font-weight: 500;
  font-size: 22px;
  display: flex;
}
.type {
  color: $light-grey;
  border-radius: 9px;
  width: 100px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-color);
}
.divider {
  /* border: 1px solid $grey; */
  width: 1px;
  margin: 20px 37px;
  background: $grey;
  @media only screen and (max-width: 768px) {
    width: 80%;
    height: 1px;
  }
}
</style>
