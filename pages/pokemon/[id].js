import { withRouter } from "next/router";

import mobxStore from "../../src/store/mobx";

export default withRouter(({ router }) => {
  const pokemon = mobxStore.pokemons.find(
    ({ id }) => id.toString() === router.query.id
  );

  return (
    <div>
      <h2>{pokemon.name.english}</h2>
      <table>
        <tbody>
          {Object.keys(pokemon.base).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{pokemon.base[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});
