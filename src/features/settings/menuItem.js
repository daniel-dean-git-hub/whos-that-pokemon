import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addGen, removeGen, selectGen } from '../settings/settingsSlice'

const MenuItem = ({label, range}) => {
    const dispatch = useDispatch()

    const key = label.replace(' ','')

    //const genEnabled = useSelector(state => state.settings.gen[key])
    
    const genEnabled = useSelector(state => selectGen(state,key))
    
    // useEffect(() => {
    //     console.log('test')
    // }, [dispatch, genEnabled])

    const test = () => {
        genEnabled 
            ? dispatch(removeGen(key))
            : dispatch(addGen({key, range}))
    }

    return (
        <div className="menu-item">
            <label htmlFor={label}>{label}</label>
            <input type="checkbox" id={label} name={label} onChange={test} checked={genEnabled}/>
        </div>
    )
}

export default MenuItem