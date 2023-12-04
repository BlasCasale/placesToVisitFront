import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_place } from "../../redux/actions";
import FormPlace from "../FormPlace/FormPlace";
import './Home.css';
import PlaceList from "../PlaceList/PlaceList";

const Home = () => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    const darkMode = useSelector((state) => state.darkMode);

    const action = useSelector((state) => state.action);

    const style = darkMode ? 'dark' : 'clear';

    useEffect(() => {
        dispatch(get_place(user.id));
    }, [action]);

    return (
        <main className={`${style}Main`}>
            <FormPlace />
            <PlaceList />
        </main>
    );
};

export default Home;