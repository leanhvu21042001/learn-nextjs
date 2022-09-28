import { observer } from "mobx-react";
import Link from "next/link";

import mobxStore from "../src/store/mobx";

const PokemonRow = ({ pokemon }) => (
  <tr key={pokemon.id}>
    <td>
      <Link href={`/pokemon/${pokemon.id}`}>{pokemon.name.english}</Link>
    </td>
    <td>{pokemon.type.join(", ")}</td>
    <td>
      <button onClick={() => mobxStore.setPokemonSelected(pokemon)}>
        More Information
      </button>
    </td>
  </tr>
);
export default observer(PokemonRow);
