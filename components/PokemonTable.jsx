import { observer } from "mobx-react";

import PokemonRow from "./PokemonRow";

import mobxStore from "../src/store/mobx";

const combinePokemonRow = (pokemons) =>
  pokemons.map((pokemon) => <PokemonRow key={pokemon.id} pokemon={pokemon} />);

const PokemonTable = () => {
  const pokemonRows = combinePokemonRow(mobxStore.filteredPokemon);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>{pokemonRows}</tbody>
    </table>
  );
};

export default observer(PokemonTable);
