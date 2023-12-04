import { useSelector } from "react-redux";
import './PlaceList.css';
import Place from '../Place/Place';

const PlaceList = () => {

    const places = useSelector((state) => state.places);

    const darkMode = useSelector((state) => state.darkMode);

    const style = darkMode ? 'dark' : 'clear';

    return (
        <ul className="layout">
            {places.length ?
                places?.map((place) => (<Place key={place.id} {...place} style={style} />))
                :
                <h2 className={`empty ${style}Empty`}>Todavía no creaste nada... Usa el formulario para comenzar</h2>
            }
        </ul>
    )
};

export default PlaceList;