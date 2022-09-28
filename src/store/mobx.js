import { computed, makeObservable, observable } from "mobx";

class MobxStore {
  filter = "";
  pokemons = [];
  pokemonSelected = null;

  constructor() {
    makeObservable(this, {
      pokemons: observable,
      filter: observable,
      pokemonSelected: observable,
      filteredPokemon: computed,
    });
  }

  get filteredPokemon() {
    return this.pokemons.filter(({ name: { english } }) =>
      english.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  setPokemons(pokemons) {
    this.pokemons = pokemons;
  }
  setFilter(filter) {
    this.filter = filter;
  }
  setPokemonSelected(pokemonSelected) {
    this.pokemonSelected = pokemonSelected;
  }
}

const mobxStore = new MobxStore();

export default mobxStore;
