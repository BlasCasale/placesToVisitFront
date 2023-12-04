import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import PlaceDetail from "../PlaceDetail/PlaceDetail";
import { useDispatch, useSelector } from "react-redux";
import { clear_action } from '../../redux/actions';
import './PlaceDetailContainer.css';
import FormPlaceUpdate from "../FormPlaceUpdate/FormPlaceUpdate";

const PlaceDetailContainer = () => {

    const [place, setPlace] = useState(null);

    const places = useSelector((state) => state.places);

    const darkMode = useSelector((state) => state.darkMode);

    const style = darkMode ? 'dark' : 'clear';

    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        const placeToPut = places.find((place) => place.id === id);

        setPlace(placeToPut);

        return () => dispatch(clear_action());
    }, [id]);

    useEffect(() => {
        const placeToPut = places.find((place) => place.id === id);

        document.title = `Vamos a pasear | ${placeToPut.name}`;

        return () => document.title = 'Vamos a pasear';
    }, [])

    return (
        <section className={`${style}Section sectionDetail`}>
            <FormPlaceUpdate id={id} />
            <PlaceDetail {...place} style={style} UserId={user && user.id} />
        </section>
    )
}

export default PlaceDetailContainer;