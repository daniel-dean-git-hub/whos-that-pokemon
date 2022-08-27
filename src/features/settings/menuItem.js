import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { enableGen, disableGen, selectGen, selectToggleAllState, enableAll, disableAll } from '../settings/settingsSlice'

const MenuItem = ({label}) => {
    const dispatch = useDispatch()
    const genEnabled = useSelector(state => selectGen(state,label))
    const toggleAll = useSelector(selectToggleAllState)
   
    const toggleChecked = () => {
        if (label === "Toggle All") {
            return toggleAll ? dispatch(disableAll()) : dispatch(enableAll())
        }
        return genEnabled ? dispatch(disableGen(label)) : dispatch(enableGen(label))
    }

    return (
        <div className="menu-item">
            <div>{label}</div>
            <div className="switch">
                <input 
                    type="checkbox" 
                    id={label} 
                    name={label} 
                    onChange={toggleChecked} 
                    checked={label === "Toggle All" ? toggleAll : genEnabled}/>
                <label htmlFor={label}  className="slider"></label>
            </div>
        </div>
    )
}

export default MenuItem