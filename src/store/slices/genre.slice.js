import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";

const initialState = {
    genres: [],
    status: null,
    error: null
}

export const getAllGenres = createAsyncThunk(
    'genreSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            return await genreService.getAll();
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    extraReducers: {
        [getAllGenres.pending] : (state) => {
            state.status = 'pending'
        },
        [getAllGenres.fulfilled] : (state, action) => {
            state.status = 'fulfilled'
            state.genres = action.payload.genres
        },
        [getAllGenres.rejected] : (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
});

const genreReducer = genreSlice.reducer;

export default genreReducer;