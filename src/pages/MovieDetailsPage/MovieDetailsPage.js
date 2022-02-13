import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {getMovieById} from "../../store";
import css from './MovieDetailsPage.module.css'
import MovieDetailsGenres from "../../components/MovieDetailsGenres/MovieDetailsGenres";
import ProductionCompanies from "../../components/ProductionCompanies/ProductionCompanies";
import {baseUrlImg} from "../../configs";

export default function MovieDetailsPage() {

    const {movieDetails, status, error} = useSelector(state => state['movieReducer']);

    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieById(id))
    }, [])

    return (
        <div className={css.wrap}>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            <div><img src={baseUrlImg + movieDetails?.poster_path} alt={movieDetails?.original_title}/></div>
            <div>
                <h1>{movieDetails?.original_title}</h1>
                <div className={css.rating}>
                    <h3>Release Date: {movieDetails?.release_date}</h3>
                    <h3>Rating: {movieDetails?.vote_average}</h3>
                </div>
                <div className={css.genres}>
                    <h3>Genres:</h3>
                    <h3 className={css.genreItem}>
                        {movieDetails?.genres.map(genre =>
                            <MovieDetailsGenres key={genre.id} genre={genre}/>
                        )}
                    </h3>
                </div>
                <p className={css.description}>
                    {movieDetails?.overview}
                </p>
                <div>
                    <h2>Production Companies</h2>
                    <div className={css.company}>
                        {movieDetails?.production_companies.map(company =>
                            <ProductionCompanies key={company.id} company={company}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}