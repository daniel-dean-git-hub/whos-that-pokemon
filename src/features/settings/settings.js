import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import MenuItem from './menuItem'
import { selectAll } from './settingsSlice'
import './settings.scss'

const Settings = () => {
    const [menu, setMenu] = useState(false)   
    const pokemonGens = useSelector(selectAll)

    return (
        <>
            <div className="settings-container">
                <FontAwesomeIcon 
                    icon={faGear} 
                    onClick={() => setMenu(!menu)} />
            </div>
            {
                menu && 
                    <div className="settings-menu">
                        <MenuItem label='Toggle All' />
                        { pokemonGens.map((value, key) => 
                            <MenuItem 
                                key={key} 
                                label={value[0]} />) 
                        }
                    </div>
            }
        </>
    )
}

export default Settings