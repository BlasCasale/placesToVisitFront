import { useEffect, useState } from "react"
import { validate, styleInput } from "../../utils/validate";
import { useDispatch, useSelector } from "react-redux";
import { clear_error, create_user } from '../../redux/actions';
import './RegisterForm.css'
import BtnPass from "../BtnPass/BtnPass";


const RegisterForm = () => {

    const dispatch = useDispatch();

    // codigo para el css y el darkMode

    const darkMode = useSelector((state) => state.darkMode);

    const style = darkMode ? 'dark' : 'clear';

    // error de redux

    const error = useSelector((state) => state.error);

    // codigo para los inputs

    const [shown, setShown] = useState({ password: false, confirmPassword: false });

    const [input, setInput] = useState({ name: "", last_name: "", mail: "", password: "", confirmPassword: "" });

    const [errorInput, setInputError] = useState({ name: "", last_name: "", mail: "", password: "", confirmPassword: "", passNoMatch: "" });

    const [styleError, setStyleError] = useState({ name: "", last_name: "", mail: "", password: "", confirmPassword: "" });

    // validador para el disable (boolean)

    const validateBoolean = errorInput.name == "" && errorInput.last_name == "" && errorInput.mail == "" && errorInput.password == "" && errorInput.confirmPassword == "" && errorInput.passNoMatch == "" && input.name != "" && input.last_name != "" && input.password != "";

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
            name: input.name,
            last_name: input.last_name,
            mail: input.mail,
            password: input.password
        };

        if (validateBoolean) dispatch(create_user(user));

        setInput({ name: "", last_name: "", password: "", confirmPassword: "", mail: "" });
    };

    useEffect(() => {
        return () => dispatch(clear_error())
    }, [])

    return (
        <section className={`${style}SectionForm sectionForm`} onSubmit={handleSubmit}>
            <form onSubmit={handleSubmit} className={`form ${style}Form`}>
                <legend className={`${style}Legend`}>Completa todos los campos:</legend>

                <div className="inputContainer">
                    <label className={`${style}Label`} htmlFor="name">* Ingresa tu nombre:</label>
                    <input type="text" id="name" name="name" value={input.name} className={`formInput ${styleError.name}`} onChange={handleInput} />
                    <span className="formSpan">{errorInput.name}</span>
                </div>

                <div className="inputContainer">
                    <label className={`${style}Label`} htmlFor="last_name">* Ingresa tu apellido:</label>
                    <input type="text" id="last_name" name="last_name" value={input.last_name} className={`${styleError.last_name} formInput`} onChange={handleInput} />
                    <span className="formSpan">{errorInput.last_name}</span>
                </div>

                <div className="inputContainer">
                    <label className={`${style}Label`} htmlFor="mail">* Ingresa tu mail:</label>
                    <input type="email" id="mail" name="mail" value={input.mail} className={`${styleError.mail} formInput`} onChange={handleInput} />
                    <span className="formSpan">{errorInput.mail}</span>
                </div>

                <div className="inputContainer">
                    <label className={`${style}Label`} htmlFor="password">* Ingresa tu contraseña:</label>
                    <div className="changerContainer">
                        <input type={shown.password ? 'text' : 'password'} id="password" name="password" value={input.password} className={`${styleError.password} formInput`} onChange={handleInput} />

                        <button type="button" onClick={() => handleClick('password')} className={`${style}BtnChange btnChange`}><BtnPass boolean={shown.password} style={style} /></button>
                    </div>
                    <span className="formSpan">{errorInput.password}</span>
                </div>

                <div className="inputContainer">
                    <label className={`${style}Label`} htmlFor="confirmPassword">* Confirma tu contraseña:</label>
                    <div className="changerContainer">
                        <input type={shown.confirmPassword ? 'text' : 'password'} id="confirmPassword" name="confirmPassword" value={input.confirmPassword} className={`${styleError.confirmPassword} formInput`} onChange={handleInput} />

                        <button type="button" onClick={() => handleClick('confirmPassword')} className={`${style}BtnChange btnChange`}><BtnPass boolean={shown.confirmPassword} style={style} /></button>
                    </div>
                    <span className="formSpan">{errorInput.confirmPassword}</span>
                </div>

                <span className='formSpan'>{errorInput.passNoMatch}</span>

                <span className={`${style}Span span`}>Los campos con * son obligatorios</span>

                <span className="formSpan">{error}</span>

                <button type="submit" disabled={validateBoolean == false} className={`${style}BtnSubmit btnSubmit`}>Registrarse</button>
            </form>
        </section>
    )
}

export default RegisterForm