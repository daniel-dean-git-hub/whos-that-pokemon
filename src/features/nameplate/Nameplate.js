import React from 'react'
import { useSelector } from 'react-redux'
import { selectPokemon, selectVisibility } from '../pokemon/pokemonSlice'
import './Nameplate.scss'

const Nameplate = () => {
    const revealName = useSelector(selectVisibility)
    const { name } = useSelector(selectPokemon)

    return (
        <h1 style={{fontSize: '4rem'}}>{ revealName && name ? name : '? ? ?'}</h1>
    )
}

export default Nameplate