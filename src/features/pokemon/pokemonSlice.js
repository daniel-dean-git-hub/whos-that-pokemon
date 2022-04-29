import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPokemonDetails } from './pokemonAPI'

const initialState = {
    details: {},
    isVisible: false,
    isLoading: true,
    hasError: false,
}

export const getPokemon = createAsyncThunk(
    'pokemon/getPokemon',
    async (id = 0) => {
        const response = await fetchPokemonDetails(id) 
        return response
    }
)

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        correctGuess: (state) => {
            state.isVisible = true;
        },
        giveUp: (state) => {
            state.isVisible = true;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getPokemon.pending, (state) => {
            state.isLoading = true
            state.hasError = false
        })
        .addCase(getPokemon.fulfilled, (state, action) => {
            state.details = action.payload
            state.isVisible = false
            state.isLoading = false
            state.hasError = false
        })
        .addCase(getPokemon.rejected, (state) => {
            state.isLoading = false
            state.hasError = true
        })
    }
})


export const { correctGuess, giveUp } = pokemonSlice.actions

export const selectPokemon = state => state.pokemon.details
export const selectLoading = state => state.pokemon.isLoading
export const selectVisibility = state => state.pokemon.isVisible

export default pokemonSlice.reducer