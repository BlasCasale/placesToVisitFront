import { useDispatch, useSelector } from "react-redux";
import { dark_mode, sign_out } from "../../redux/actions";
import { Link, NavLink } from "react-router-dom";
import BtnDark from "../BtnDark/BtnDark";
import './NavBar.css';
import { useRedirect } from "../../hook/useRedirect";

const NavBar = () => {

    const user = useSelector((state) => state.user);

    useRedirect(user);

    const darkMode = useSelector((state) => state.darkMode);

    const style = darkMode ? 'dark' : 'clear';

    const dispatch = useDispatch();

    const handleDarkMode = () => dispatch(dark_mode(darkMode));

    return (
        <header className={`${style}Header`}>
            <NavLink to={'/'}>
                <h1 className={`${style}Title`}>Vamos a pasear</h1>
            </NavLink>
            <ul className="ulNavBar">
                {
                    user &&
                    <>
                        <li>
                            <Link className={`${style}Link`} to={'/home'}>Inicio</Link>
                        </li>
                    </>
                }
                {
                    !user &&
                    <>
                        <li>
                            <Link className={`${style}Link`} to={'/register'}>Registrarse</Link>
                        </li>
                        <li>
                            <Link className={`${style}Link`} to={'/login'}>Iniciar sesión</Link>
                        </li>
                    </>
                }
            </ul>

            {
                user &&
                <div className="boxName">
                    <span className={`${style}Name spanName`}>{`Bienvenido ${user.name} ${user.last_name}`}</span>
                    <button onClick={() => dispatch(sign_out())} className={`${style}BtnSession btnSession`}>Cerrar sesión</button>
                </div>
            }

            <BtnDark style={style} handleDarkMode={handleDarkMode} />
        </header>
    )
}

export default NavBar