import { useSelector } from 'react-redux';
import './Footer.css';

const Footer = () => {

    const darkMode = useSelector((state) => state.darkMode);

    const style = darkMode ? 'dark' : 'clear';

    return (
        <section className={`${style}SectionFooter sectionFooter`}>
            <footer className={`${style}Footer`}>
                <p className={`${style}PFooter`}>Aplicación hecha con fines educativos.</p>
                <p className={`${style}PFooter`}>Autoría Blas Casale.</p>
            </footer>
        </section>
    )
};

export default Footer;