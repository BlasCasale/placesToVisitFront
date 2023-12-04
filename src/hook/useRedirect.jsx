import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirect = (user) => {

    const navigate = useNavigate();

    useEffect(() => {
        user && navigate('/home');
        !user && navigate('/');
    }, [user]);
};