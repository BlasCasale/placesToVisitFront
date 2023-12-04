import '../RegisterForm/RegisterForm.css';
import { useEffect, useState } from "react"
import { validate, styleInput } from "../../utils/validate";
import { useDispatch, useSelector } from "react-redux";
import { clear_error, sign_in } from '../../redux/actions';
import BtnPass from '../BtnPass/BtnPass';

const LoginForm = () => {
    const dispatch = useDispatch();

    // codigo para el css y el darkMode

    const darkMode = useSelector((state) => state.darkMode);

    const style = darkMode ? 'dark' : 'clear';

    // error de redux

    const error = useSelector((state) => state.error);

    // codigo para los inputs

    const [shown, setShown] = useState({ password: false });

    const [input, setInput] = useState({ mail: "", password: "" });

    const [errorInput, setInputError] = useState({ mail: "", password: "" });

    const [styleError, setStyleError] = useState({ mail: "", password: "" });

    // validador para el disable (boolean)

    const validateBoolean = errorInput.mail == "" && errorInput.password == "" && input.mail != "" && input.password != "";

    // funciones para los inputs, btn y form

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        setInputError(validate({
            ...input, [e.target.name]: e.target.value
        }, errorInput));

        setStyleError(styleInput(errorInput, styleError));
    };

    const handleClick = (field) => {
        setShown(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            mail: input.mail,
            password: input.password
        };

        if (validateBoolean) dispatch(sign_in(user));

        setInput({ password: "", mail: "" });
    };

    useEffect(() => {
        return () => dispatch(clear_error());
    }, []);

    return (
        <section className={`${style}SectionForm sectionForm`} >

            <form onSubmit={handleSubmit} className={`form ${style}Form`}>
                <legend className={`${style}Legend`}>Completa todos los campos:</legend>

                <div className="inputContainer">
                    <label className={`${style}Label`} htmlFor="mail">* Ingresa tu mail:</label>
                    <input type="email" id="mail" name="mail" value={input.mail} className={`${styleError.mail} formInput`} onChange={handleInput} />
                    <span className="formSpan">{errorInput.mail}</span>
                </div>

                <div className="inputContainer">
                    <label className={`${style}Label`} htmlFor="password">* Ingresa tu contraseña:</label>
                    <div className="changerContainer">
                        <input type={shown.password ? 'text' : 'password'} id="password" name="password" value={input.password} className={`${styleError.password} formInput`} onChange={handleInput} />

                        <button type='button' onClick={() => handleClick('password')} className={`${style}BtnChange btnChange`}><BtnPass boolean={shown.password} style={style} /></button>

                    </div>
                    <span className="formSpan">{errorInput.password}</span>
                </div>

                <span className={`${style}Span span`}>Los campos con * son obligatorios</span>

                <span className="formSpan">{error}</span>

                <button type="submit" className={`${style}BtnSubmit btnSubmit`}>Iniciar sesión</button>

            </form>

        </section>
    )
}

{/* <input type="checkbox" name="" id="" value={<BtnPass boolean={shown.password} />} onClick={() => handleClick('password')}/> */ }

export default LoginForm;