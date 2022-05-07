import React from 'react'
import './Pokemon.scss'

const Pokemon = ({pokemonDetails, changeLoadState, styleClasses}) => {
    return (
        <img   
            draggable={false}
            className={styleClasses} 
            src={pokemonDetails.sprites.other['official-artwork'].front_default} 
            alt={pokemonDetails.name}
            onLoad={changeLoadState}
        />              
    )
}

export default Pokemon