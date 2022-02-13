import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getMoviesByGenres} from "../../store";
import MoviesByGenres from "../../components/MoviesByGenres/MoviesByGenres";
import css from './MoviesByGenresPage.module.css';

export default function MoviesByGenresPage() {

    const {id} = useParams();

    const {moviesByGenres, status, error} = useSelector(state => state['movieReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMoviesByGenres(id));
    },[id])

    return (
        <div>
            {status === 'pending' && <h1>Loading</h1>}
            {error && <h2>{error}</h2>}
            <div className={css.wrap}>{moviesByGenres.map(item => <MoviesByGenres key={item.id} item={item}/>)}</div>
            <div>
                <div>
                    <button onClick={() => {

                    }}>Previous</button>
                </div>
                <div>
                    <button onClick={() => {

                    }}>Next</button>
                </div>
            </div>
        </div>
    );
}