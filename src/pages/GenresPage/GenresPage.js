import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getAllGenres} from "../../store";
import Genre from "../../components/Genre/Genre";
import css from './GenresPage.module.css'
import {Outlet} from "react-router-dom";

export default function GenresPage() {

    const {genres, status, error} = useSelector(state => state['genreReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    },[]);

    return (
        <div className={css.wrap}>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            <h1 className={css.title}>List Genres</h1>
            <div className={css.wrapContent}>
                <div>{genres.map(genre => <Genre key={genre.id} genre={genre}/>)}</div>
                <div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}