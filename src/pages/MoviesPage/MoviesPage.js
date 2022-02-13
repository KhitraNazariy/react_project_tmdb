import MoviesList from "../../components/MoviesList/MoviesList";
import css from './MoviePage.module.css'

export default function MoviesPage() {
    return (
        <div className={css.wrap}>
            <MoviesList/>
        </div>
    );
}