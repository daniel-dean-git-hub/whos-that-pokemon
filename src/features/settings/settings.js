import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import MenuItem from './menuItem'
import './settings.scss'

const Settings = () => {
    const [menu, setMenu] = useState(false)
    
  return (
    <>
        <div className="settings-container">
            <FontAwesomeIcon icon={faGear} onClick={() => setMenu(!menu)}/>
        </div>
        {
            menu && 
                <div className="settings-menu">
                    <MenuItem label={'Gen I'} range={[1,151]} />
                    <MenuItem label={'Gen II'} range={[152, 251]} />
                    <MenuItem label={'Gen III'} range={[252, 386]} />
                </div>
        }
    </>
  )
}

export default Settings