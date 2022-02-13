import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    movieDetails: null,
    moviesByGenres: [],
    status: null,
    error: null,
    currentPage: 1,
    currentPageGenres: 1
}

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (currentPage, {rejectWithValue}) => {
        try {
            return await movieService.getAll(currentPage);
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const getMovieById = createAsyncThunk(
    'movieSlice/getMovieById',
    async (id, {rejectWithValue}) => {
        try {
            return await movieService.getById(id);
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const getMoviesByGenres = createAsyncThunk(
    'movieSlice/getMoviesByGenres',
    async ({id,currentPageGenres}, {rejectWithValue}) => {
        try {
            return await movieService.getMovieByGenres({id,currentPageGenres});
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setCurrentPageGenres: (state, action) => {
            state.currentPageGenres = action.payload
        }
    },
    extraReducers: {
        [getAllMovies.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.movies = action.payload;
        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },

        [getMovieById.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getMovieById.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.movieDetails = action.payload;
        },
        [getMovieById.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },

        [getMoviesByGenres.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getMoviesByGenres.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.moviesByGenres = action.payload;
        },
        [getMoviesByGenres.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },

    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer;

export const {setCurrentPage, setCurrentPageGenres} = movieSlice.actions;