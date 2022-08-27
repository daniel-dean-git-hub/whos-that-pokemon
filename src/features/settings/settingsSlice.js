import { createSlice, current  } from '@reduxjs/toolkit'

const initialState = {
    gen: [
        {
            name: 'Gen I',
            range: [1,151],
            enabled: true
        }, {   
            name: 'Gen II',
            range: [152, 251],
            enabled: false
        }, {   
            name: 'Gen III',
            range: [252, 386],
            enabled: false
        }, {   
            name: 'Gen IV',
            range: [387,493],
            enabled: false
        }, {   
            name: 'Gen V',
            range: [494,649],
            enabled: false
        }, {   
            name: 'Gen VI',
            range: [650,721],
            enabled: false
        }, {   
            name: 'Gen VII',
            range: [722,809],
            enabled: false
        }, {   
            name: 'Gen VIII',
            range: [810,905],
            enabled: false
        }           
    ],
    toggleAllState: false
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        enableGen: (state, {payload}) => {
            const index = state.gen.findIndex(obj  => obj.name === payload)
            state.gen[index].enabled = true;
            state.toggleAllState = false;
        },
        disableGen: (state, {payload}) => {            
            const index = state.gen.findIndex(obj  => obj.name === payload)
            state.gen[index].enabled = false;
            state.toggleAllState = false;
        },
        enableAll: (state) => {
            state.gen.forEach(key => key.enabled = true)
            state.toggleAllState = true;
        },
        disableAll: (state) => {
            state.gen.forEach(key => key.enabled = false)
            state.toggleAllState = false;
        }
    }
})


export const { enableGen, disableGen, enableAll, disableAll } = settingsSlice.actions

export const selectToggleAllState = state => state.settings.toggleAllState

export const  selectAll = state => state.settings.gen
                                        .reduce((previousValue, currentValue) => [...previousValue, [currentValue.name, currentValue.range]],[])

export const selectGen = (state, key) => state.settings.gen
                                            .filter(obj => obj.name === key)
                                            .reduce((prevValue, currentValue) => currentValue.enabled, '') 

export const selectEnabledGens = state => state.settings.gen
                                        .filter(e => e.enabled === true)
                                        .reduce((previousValue, currentValue) => [...previousValue, currentValue.range],[])

export default settingsSlice.reducer