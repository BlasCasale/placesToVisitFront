import './PlaceDetail.css';
import { useDispatch } from "react-redux";
import { delete_place } from "../../redux/actions";

const PlaceDetail = ({ name, adress, district, price, theme, style, id, UserId }) => {

    const dispatch = useDispatch();

    const deletePlace = () => {
        const data = { UserId: UserId, id: id };
        dispatch(delete_place(data));
    };

    return (
        <li className={`card ${style}Card`}>

            <p className={`${style}Description description`}>Nombre: {name}</p>

            <p className={`${style}Description description`}>Dirección: {adress}</p>

            {district && <p className={`${style}Description description`}>Barrio: {district}</p>}

            <p className={`${style}Description description`}>Temática: {theme}</p>

            {price && <p className={`descriptionPrice description`}>Precio: ${price}</p>}

            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={deletePlace}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7l16 0" />
                <path d="M10 11l0 6" />
                <path d="M14 11l0 6" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>

        </li>
    )
}

export default PlaceDetail