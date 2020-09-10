import React, { useState, useEffect } from "react"
import axios from "axios"
import styles from "styled-components"

const PokemonName = styles.div`
h4 {
  color: rebeccapurple;
}
`

const PokemonCard = (props) => {
    const [pokemon, setPokemon] = useState("")
    useEffect(() => {
        axios
            .get(props.url)
            .then(res => {
                setPokemon(res.data)
            })
    }, [props.url]
    )

    return (
      <div>
        {pokemon.sprites && pokemon.sprites.front_default && (
          <img src={pokemon.sprites.front_default} alt="pokemon"></img>
        )}
        <PokemonName>
          <h4>{pokemon.name}</h4>
        </PokemonName>
      </div>
    );
}

export default PokemonCard