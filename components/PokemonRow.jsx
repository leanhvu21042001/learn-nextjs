import { Box, Button } from "@mui/material";
import { observer } from "mobx-react";
import Link from "next/link";

import mobxStore from "../src/store/mobx";

const PokemonRow = ({ pokemon }) => (
  <tr key={pokemon.id}>
    <td>
      <Link href={`/pokemon/${pokemon.id}`}>{pokemon.name.english}</Link>
    </td>
    <td>
      <Box component="b">{pokemon.type.join(", ")}</Box>
    </td>
    <td>
      <Button
        variant="contained"
        onClick={() => mobxStore.setPokemonSelected(pokemon)}
      >
        More Information
      </Button>
    </td>
  </tr>
);
export default observer(PokemonRow);
