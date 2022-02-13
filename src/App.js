import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import GenresPage from "./pages/GenresPage/GenresPage";
import MoviesByGenresPage from "./pages/MoviesByGenresPage/MoviesByGenresPage";


export default function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/movies'} element={<MoviesPage/>}/>
                    <Route path={'/movies/:id'} element={<MovieDetailsPage/>}/>
                    <Route path={'/genres'} element={<GenresPage/>}>
                        <Route path={'/genres/movies/:id'} element={<MoviesByGenresPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}