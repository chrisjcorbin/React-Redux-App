import axios from "axios"
import React from 'react';
import './App.css';
import PokemonList from "./components/PokemonList"
import styles from "styled-components"

const PokemonHeader = styles.div`
h2 {
  color: rebeccapurple;
  text-shadow: 1px 1px black;
}
`;

function App() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
    })

  return (
    <div className="App">
      <PokemonHeader>
        <h2>Pokemon List</h2>
      </PokemonHeader>
      <PokemonList />
    </div>
  );
}

export default App;