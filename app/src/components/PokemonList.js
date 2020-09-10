import React, { useEffect } from "react"
import { connect } from "react-redux"
import PokemonCard from "./PokemonCard"
import { fetchPokemon, nextPokemon } from "../actions/actions"
import styles from "styled-components"

const PokemonStyler = styles.div`
display: flex;
max-width: 50%;
flex-wrap: wrap;
margin: 0 auto;
`

const PokemonButtons = styles.div`
display: flex;
justify-content: center;
margin: 0 auto;
button{
    color: white;
    background-color: rebeccapurple;
    border-radius: 50%;
`

const PokemonList = (props) => {
    useEffect(() => {
        props.fetchPokemon()
    }, [])

    let downArrow = "<"
    let upArrow = ">"

    return (
      <div>
        <div>
          <PokemonStyler>
            {props.pokemon.map((pokemon) => {
              return <PokemonCard pokemon={pokemon} url={pokemon.url} />;
            })}
          </PokemonStyler>
        </div>
        <div>
          <PokemonButtons>
            <button onClick={() => props.nextPokemon(props.lastURL)}>
              {downArrow}
            </button>
            &nbsp;&nbsp;
            <button onClick={() => props.nextPokemon(props.nextURL)}>
              {upArrow}
            </button>
          </PokemonButtons>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        nextURL: state.nextURL,
        lastURL: state.lastURL
    }
}

export default connect(mapStateToProps, { fetchPokemon, nextPokemon })(PokemonList)