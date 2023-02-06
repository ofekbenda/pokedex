<template>
  <div class="page-container">
    <Logo />
    <div v-if="getPokemonName === ''">
      <Search v-on:filter-pokemons="onFilterPokemonsEvent" />
      <CardList :pokemonsData="pokemonsDataFilteres" />
    </div>
    <div class="pokemon-info-container" v-if="getPokemonName">
      <PokemonInfoCard :pokemonInfo="selectedPokemonInfo" />
      <Button :text="'Go back'" :clickHandler="setPokemonName" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CardList from "./CardList.vue";
import Logo from "./Logo.vue";
import PokemonInfoCard from "./PokemonInfoCard.vue";
import Search from "./Search.vue";
import axios from "axios";
import { selectedPokemonModule } from "../store/index";
import { IDescriptionAPI, IPokemonAPI, IPokemonInfo, IPokemonListAPI } from "@/Utils/types";
import Button from "./Button.vue";

export interface Pokemon {
  id: number;
  name: string;
  imgSrc: string;
  pokemonStats: [];
  types: string[];
}

@Component({
  components: {
    CardList,
    Search,
    Logo,
    PokemonInfoCard,
    Button,
  },
})
export default class HomePage extends Vue {
  public pokemonsData: Array<IPokemonInfo> = [];
  public searchText: string = "";

  constructor() {
    super();
    this.getPokemons();
  }

  get getPokemonName() {
    return selectedPokemonModule.name;
  }
  public setPokemonName() {
    selectedPokemonModule.setSelectedPokemon("");
  }

  public onFilterPokemonsEvent(searchText: string) {
    this.searchText = searchText;
  }

  get pokemonsDataFilteres() {
    const nameRegex = new RegExp(this.searchText, "gi");
    return this.pokemonsData.filter(
      (pokemonData) => pokemonData.name.match(nameRegex) || pokemonData.id.toString() === this.searchText
    );
  }

  get selectedPokemonInfo() {
    return this.pokemonsData.filter((pokemonData) => pokemonData.name === this.getPokemonName)[0];
  }

  async getPokemonDescription(name: string): Promise<string> {
    let desc = "";
    await axios
      .get(`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${name}`)
      .then((res: IDescriptionAPI) => {
        desc = res.data.info.description;
      });
    return desc;
  }

  getPokemons(): void {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=150").then((res: IPokemonListAPI) => {
      const dataRequests = res.data.results.map((pokemonItem) => {
        const { url } = pokemonItem;
        return axios.get(url);
      });

      Promise.all(dataRequests).then((responses) => {
        responses.forEach(async (pokemonData: IPokemonAPI) => {
          const { sprites, id, name, types, stats } = pokemonData.data;
          const imgSrc = sprites.front_default;
          const typesList = types.map(({ type }) => type.name);
          const pokemonStats = stats.map(({ base_stat }) => base_stat);
          const [hp, attack, defense, specialAttack, specialDefense, speed] = pokemonStats;
          const description = await this.getPokemonDescription(name);

          await this.pokemonsData.push({
            id,
            name,
            imgSrc,
            description,
            hp,
            attack,
            defense,
            specialAttack,
            specialDefense,
            speed,
            typesList,
          });
        });
      });
    });
  }
}
</script>
<style lang="scss" scoped>
.pokemon-info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
