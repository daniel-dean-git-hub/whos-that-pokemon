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
            state.gen[payload.id] = payload.range
        },
        removeGen: (state, {payload}) => {
            state.gen[payload.id] = []
        }
    }
})


export const { addGen, removeGen } = settingsSlice.actions

export const selectGen = state => state.settings.gen

export default settingsSlice.reducer