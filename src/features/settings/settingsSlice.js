import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        gen: {
            GenI: [1,151],
        },
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        addGen: (state, {payload}) => {
            state.gen[payload.key] = payload.range
        },
        removeGen: (state, {payload}) => {
            delete state.gen[payload]
        }
    }
})


export const { addGen, removeGen } = settingsSlice.actions

export const selectGen = (state, key) => state.settings.gen[key] ? true : false 
export const selectAll = (state) => Object.values(state.settings.gen)

export default settingsSlice.reducer