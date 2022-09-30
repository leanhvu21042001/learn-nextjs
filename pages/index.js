import { Grid, Paper, styled } from "@mui/material";

import PokemonInfo from "../components/PokemonInfo";
import PokemonTable from "../components/PokemonTable";
import PokemonFilter from "../components/PokemonFilter";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <div>
      <h3>Pokemon Search</h3>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>
            {/* Filter */}
            <PokemonFilter />

            {/* Display Pokemons */}
            <PokemonTable />
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>
            {/* Display Pokemon have seleted */}
            <PokemonInfo />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
