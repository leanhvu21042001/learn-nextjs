import PokemonInfo from "../components/PokemonInfo";
import PokemonTable from "../components/PokemonTable";
import PokemonFilter from "../components/PokemonFilter";

export default function Home() {
  return (
    <div>
      <h3>Pokemon Search</h3>
      <div className="pokemon-search">
        <div>
          {/* Filter */}
          <PokemonFilter />

          {/* Display Pokemons */}
          <PokemonTable />
        </div>

        {/* Display Pokemon have seleted */}
        <PokemonInfo />
      </div>
    </div>
  );
}
