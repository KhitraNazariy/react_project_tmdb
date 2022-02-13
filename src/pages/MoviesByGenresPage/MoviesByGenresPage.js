import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getMoviesByGenres, setCurrentPageGenres} from "../../store";
import MoviesByGenres from "../../components/MoviesByGenres/MoviesByGenres";
import css from './MoviesByGenresPage.module.css';

export default function MoviesByGenresPage() {

    const {id} = useParams();

    let {moviesByGenres, status, error, currentPageGenres} = useSelector(state => state['movieReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesByGenres({id, currentPageGenres}));
    },[id, currentPageGenres]);

    const moviesByGenresArr = moviesByGenres.results;
    const totalPages = moviesByGenres.total_pages;

    return (
        <div>
            {/*{status === 'pending' && <h1>Loading...</h1>}*/}
            {error && <h2>{error}</h2>}
            <div className={css.wrap}>{moviesByGenresArr?.map(item => <MoviesByGenres key={item.id} item={item}/>)}</div>
            <div className={css.button}>
                <div>
                    <button onClick={() => {
                        if (currentPageGenres <= 1) {
                            dispatch(setCurrentPageGenres(1))
                        } else {
                            dispatch(setCurrentPageGenres(--currentPageGenres))
                        }
                    }}>Previous</button>
                </div>
                <div className={css.titlePage}>{currentPageGenres}</div>
                <div>
                    <button onClick={() => {
                        if (currentPageGenres === totalPages) {
                            dispatch(setCurrentPageGenres(totalPages));
                        } else {
                            dispatch(setCurrentPageGenres(++currentPageGenres));
                        }
                    }}>Next</button>
                </div>
            </div>
        </div>
    );
}