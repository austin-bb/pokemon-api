import React, { useState } from 'react'

const FetchComponent = () => {
    const [pokemon, setPokemon] = useState([])

    const fetchPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log(res.results)
                setPokemon(res.results)
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1>Fetch Pokemon</h1>
            <button onClick={ fetchPokemon }>Get Pokemon</button>

            {
                pokemon.map((pokemon, i) => {
                    return (
                        <p key={i}>{ pokemon.name }</p>
                    )
                })
            }
        </div>
    )
}

export default FetchComponent