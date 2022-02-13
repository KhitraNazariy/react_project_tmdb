import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getAllMovies, setCurrentPage} from "../../store";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css';

export default function MoviesList() {

    let {movies, status, error, currentPage} = useSelector(state => state['movieReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies(currentPage));
    }, [currentPage]);

    const movieArr = movies.results;
    const totalPages = movies.total_pages;

    return (
        <>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {movieArr?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            <div className={css.button}>
                <div>
                    <button onClick={() => {
                        if (currentPage === 1) {
                            dispatch(setCurrentPage(1))
                        } else {
                            dispatch(setCurrentPage(--currentPage))
                        }

                    }}>previous
                    </button>
                </div>
                <div className={css.titlePage}>{currentPage}</div>
                <div>
                    <button onClick={() => {
                        if (currentPage === totalPages) {
                            dispatch(setCurrentPage(totalPages));
                        } else {
                            dispatch(setCurrentPage(++currentPage))
                        }
                    }}>next
                    </button>
                </div>
            </div>
        </>
    );
}