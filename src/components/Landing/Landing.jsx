import { useSelector } from "react-redux";
import './Landing.css';
import { Link } from "react-router-dom";

const Landing = () => {

    const darkMode = useSelector((state) => state.darkMode);

    const style = darkMode ? 'dark' : 'clear';

    return (
        <section className={`${style}Landing sectionLanding`}>
            <div className={`${style}ContainerLanding containerLanding`}>
                <h2 className={`${style}TitleLanding`}>Vamos a pasear</h2>
                <div className='divLanding'>
                    <h3 className={`${style}TitleLanding`}>¿Todavía no te registraste?</h3>
                    <Link to={'/register'} className={`${style}Link`}>Registrarse</Link>
                </div>
                <div className='divLanding'>
                    <h3 className={`${style}TitleLanding`}>¿Ya tenes una cuenta?</h3>
                    <Link to={'/login'} className={`${style}Link`}>Inicia sesión</Link>
                </div>
            </div>
        </section>
    )
}

export default Landing