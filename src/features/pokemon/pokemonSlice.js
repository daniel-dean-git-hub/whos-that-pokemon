import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchPokemonDetails } from './pokemonAPI'

const initialState = {
    details: {},
    userGuess: '',
    isVisible: false,
    isLoading: true,
    hasError: false,
    correct: false,
    score: 0
}

export const getPokemon = createAsyncThunk(
    'pokemon/getPokemon',
    async (id = 0, { dispatch }) => {
        await dispatch(newGame())
        const response = await fetchPokemonDetails(id) 
        return response
    }
)

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        newGame: (state) => {
            state.details = {};
            state.userGuess = '';
        },
        correctGuess: (state) => {
            state.isVisible = true;
            state.correct = true;
            state.score += 1;
        },
        giveUp: (state) => {
            state.isVisible = true;
            state.correct = false;
        },
        imageLoaded: (state) => {
            state.isLoading = false;
        },
        updateGuess: (state, action) => {
            state.userGuess = action.payload
        }
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
            state.hasError = false
        })
        .addCase(getPokemon.rejected, (state) => {
            state.isLoading = false
            state.hasError = true
        })
    }
})


export const { newGame, correctGuess, updateGuess, giveUp, imageLoaded } = pokemonSlice.actions

export const selectPokemon = state => state.pokemon.details
export const selectLoading = state => state.pokemon.isLoading
export const selectVisibility = state => state.pokemon.isVisible
export const selectUserGuess = state => state.pokemon.userGuess
export const selectCorrectState = state => state.pokemon.correct
export const selectScore = state => state.pokemon.score

export default pokemonSlice.reducer