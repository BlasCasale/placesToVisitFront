import { useSelector } from 'react-redux';
import Landing from '../../components/Landing/Landing';

const LandingView = () => {
    const user = useSelector((state) => state.user);

    return (
        <>
            {!user && <Landing />}
        </>
    )
}

export default LandingView