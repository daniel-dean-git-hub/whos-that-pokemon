import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGen, removeGen, selectGen } from '../settings/settingsSlice'

const MenuItem = ({label, range}) => {
    const dispatch = useDispatch()
    const gens = useSelector(selectGen)
        
    const genEnabled = gens.find(element => element.id === label.replace(' ',''))

    console.log(gens)

    //console.log(genEnabled)


    return (
        <div className="menu-item">
            <label htmlFor={label}>{label}</label>
            <input type="checkbox" id={label} name={label}  />
        </div>
    )
}

export default MenuItem