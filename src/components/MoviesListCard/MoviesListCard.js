import {Link} from "react-router-dom";

import css from './MovieListCard.module.css'
import {baseUrlImg} from "../../configs";

export default function MoviesListCard({movie}) {

    const {id, original_title, poster_path, release_date, vote_average} = movie;

    return (
        <div className={css.card}>
            <div>
                <img src={baseUrlImg+poster_path} alt={original_title}/>
            </div>
            <div className={css.cardTitle}>
                <Link to={id.toString()}><h2>{original_title}</h2></Link>
            </div>
            <div className={css.rating}>
                <h3>Rating: {vote_average}</h3>
                <span>Release Data: {release_date}</span>
            </div>
        </div>
    );
}