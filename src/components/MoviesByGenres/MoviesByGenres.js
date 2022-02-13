import {baseUrlImg} from "../../configs";
import css from './MoviesByGenres.module.css';
import {Link} from "react-router-dom";

export default function MoviesByGenres({item}) {

    const {id, original_title, release_date, vote_average, poster_path} = item;

    return (
        <div className={css.wrap}>
            <div><img src={baseUrlImg + poster_path} alt={original_title}/></div>
            <div>
                <Link to={`/movies/${id.toString()}`}><h2>{original_title}</h2></Link>
                <p>Release Date {release_date}</p>
                <p>Rating {vote_average}</p>
            </div>
        </div>
    );
}