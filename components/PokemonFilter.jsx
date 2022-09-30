import { TextField } from "@mui/material";
import { observer } from "mobx-react";

import mobxStore from "../src/store/mobx";

const PokemonFilter = () => {
  const handleInputChange = ({ target: { value } }) => {
    mobxStore.setFilter(value);
  };

  return (
    <TextField
      style={{
        width: "100%",
      }}
      value={mobxStore.filter}
      onChange={handleInputChange}
    />
  );
};

export default observer(PokemonFilter);
