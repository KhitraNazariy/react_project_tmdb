import {Link} from "react-router-dom";

import css from './Header.module.css'

export default function Header() {
    return (
        <div className={css.header}>
            <Link to={'/'}>Home</Link>
            <Link to={'/movies'}>Movies</Link>
            <Link to={'/genres'}>Genres</Link>
        </div>
    );
}