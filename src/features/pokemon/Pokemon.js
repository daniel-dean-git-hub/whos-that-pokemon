import React from 'react'
import './Pokemon.scss'

const Pokemon = ({pokemonDetails, changeLoadState, isLoading, pokemonVisibility}) => {
    return (
        <img  
            height='475'
            width='475'
            draggable={false}
            className={`pokemon ${isLoading} ${pokemonVisibility} `} 
            src={pokemonDetails.image} 
            alt={pokemonDetails.name}
            onLoad={changeLoadState}
        />              
    )
}

export default Pokemon