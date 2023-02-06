import Vue from "vue";
import Vuex from "vuex";
import SelectedPokemon from "./modules/SelectedPokemon.module";
import { getModule } from "vuex-module-decorators";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    SelectedPokemon,
  },
});

export const selectedPokemonModule = getModule(SelectedPokemon, store);
