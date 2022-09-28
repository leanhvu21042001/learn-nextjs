import { observer } from "mobx-react";

import mobxStore from "../src/store/mobx";

const PokemonFilter = () => {
  const handleInputChange = ({ target: { value } }) => {
    mobxStore.setFilter(value);
  };

  return <input value={mobxStore.filter} onChange={handleInputChange} />;
};

export default observer(PokemonFilter);
