import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./slices/movie.slice";
import genreReducer from "./slices/genre.slice";

export const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['movieSlice/getMoviesByGenres/fulfilled'],
            },
        }),
    reducer: {
        movieReducer,
        genreReducer
    }
});