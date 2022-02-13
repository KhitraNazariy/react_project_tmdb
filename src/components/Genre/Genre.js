import {Link} from "react-router-dom";

export default function Genre({genre: {name, id}}) {
    return (
        <div>
            <Link to={'/genres/movies/' + id.toString()}><h2>{name}</h2></Link>
        </div>
    );
}