import { observer } from "mobx-react";

import mobxStore from "../src/store/mobx";

const PokemonInfo = () =>
  mobxStore.pokemonSelected && (
    <div>
      <h2>{mobxStore.pokemonSelected.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(mobxStore.pokemonSelected.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{mobxStore.pokemonSelected.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

export default observer(PokemonInfo);
