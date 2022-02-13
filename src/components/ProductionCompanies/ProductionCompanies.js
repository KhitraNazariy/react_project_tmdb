import css from './ProductionCompanies.module.css'
import {baseUrlImg} from "../../configs";

export default function ProductionCompanies({company: {logo_path, name, origin_country}}) {

    return (
        <div className={css.wrap}>
            <div>
                <img src={baseUrlImg+logo_path} alt=""/>
            </div>
            <div className={css.desc}>
                <p>Name: {name}</p>
                <p>Country: {origin_country}</p>
            </div>
        </div>
    );
}