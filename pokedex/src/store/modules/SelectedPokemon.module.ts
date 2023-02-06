import { VuexModule, Module, Mutation, getModule } from "vuex-module-decorators";

@Module({ namespaced: true, name: "SelectedPokemon" })
class SelectedPokemon extends VuexModule {
  public name: string = "";

  @Mutation
  public setSelectedPokemon(newName: string): void {
    this.name = newName;
  }
  @Mutation
  public removeSelectedPokemon(): void {
    this.name = "";
  }
}
export default SelectedPokemon;
