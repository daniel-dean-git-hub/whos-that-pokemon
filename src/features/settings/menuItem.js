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

        genEnabled 
            ? dispatch(disableGen(label))
            : dispatch(enableGen(label))
    }

    return (
        <div className="menu-item">
            <label htmlFor={label}>{label}</label>
            <input type="checkbox" id={label} name={label} onChange={toggleChecked} checked={label == "Toggle All" ? toggleAll : genEnabled}/>
            <span className="slider"></span>
        </div>
    )
}

export default MenuItem