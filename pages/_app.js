import { useEffect } from "react";
import mobxStore from "../src/store/mobx";

import "../styles/globals-reset.css";
import "../styles/globals.css";

const pokemon_url = "/pokemon.json";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    fetch(pokemon_url)
      .then((res) => res.json())
      .then((pokemons) => mobxStore.setPokemons(pokemons));
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
