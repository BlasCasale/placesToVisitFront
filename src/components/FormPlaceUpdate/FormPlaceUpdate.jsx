import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validatePlace, styleInputPlace } from "../../utils/validate";
import { clear_error, update_place } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const FormPlaceUpdate = ({ id }) => {
    const dispatch = useDispatch();

    const darkMode = useSelector((state) => state.darkMode);

    const error = useSelector((state) => state.error);

    const user = useSelector((state) => state.user);

    const style = darkMode ? 'dark' : 'clear';

    const navigate = useNavigate();

    // manejo de inputs, errores y estilos del form

    const [input, setInput] = useState({ name: "", adress: "", district: "", price: 0, theme: "" });

    const [errorInput, setErrorInput] = useState({ name: "", adress: "", theme: "" });

    const [styleError, setStyleError] = useState({ name: "", adress: "", theme: "" });

    const validateBoolean = errorInput.name == "" && errorInput.adress == "" && errorInput.theme == "";

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        setErrorInput(validatePlace({
            ...input, [e.target.name]: e.target.value
        }, errorInput));

        setStyleError(styleInputPlace(errorInput, styleError));
    };

    useEffect(() => {
        return () => dispatch(clear_error());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const place = {
            name: input.name,
            adress: input.adress,
            theme: input.theme,
            district: input.district == "" ? null : input.district,
            price: input.price == 0 ? null : input.price,
            UserId: user.id,
            id: id
        };

        setInput({ name: "", adress: "", theme: "", district: "", price: 0 });

        if (validateBoolean) {
            dispatch(update_place(place))
            setTimeout(() => {
                navigate('/home');
            }, 2000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`form ${style}Form`}>
            <legend className={`${style}Legend`}>Complete los campos:</legend>

            <div className="inputContainer">
                <label htmlFor="name" className={`${style}Label`}>* Ingresa el nombre del lugar:</label>
                <input type="text" className={`formInput ${styleError.name}`} onChange={handleInput} id="name" name="name" value={input.name} />
                <span className='formSpan'>{errorInput.name}</span>
            </div>

            <div className="inputContainer">
                <label htmlFor="adress" className={`${style}Label`}>* Ingresa la dirección del lugar:</label>
                <input type="text" className={`formInput ${styleError.adress}`} onChange={handleInput} id="adress" name="adress" value={input.adress} />
                <span className="formSpan">{errorInput.adress}</span>
            </div>

            <div className="inputContainer">
                <label htmlFor="theme" className={`${style}Label`}>* Ingresa la temática del paseo:</label>
                <input type="text" className={`formInput ${styleError.theme}`} onChange={handleInput} id="theme" name="theme" value={input.theme} />
                <span className="formSpan">{errorInput.theme}</span>
            </div>

            <div className="inputContainer">
                <label htmlFor="district" className={`${style}Label`}>Ingresa el barrio donde se encuentra:</label>
                <input type="text" className="formInput" onChange={handleInput} id="district" name="district" value={input.district} />
            </div>

            <div className="inputContainer">
                <label htmlFor="price" className={`${style}Label`}>Ingresa un estimativo del gasto:</label>
                <input type="number" className='formInput' onChange={handleInput} id="price" name="price" value={input.price} min={0} />
            </div>

            <span className={`${style}Span`}>Los campos con * son obligatorios</span>

            <span className="formSpan">{error}</span>

            <button type="submit" className={`btnSubmit ${style}BtnSubmit`} disabled={!validateBoolean}>Editar</button>

        </form>
    )
}

export default FormPlaceUpdate