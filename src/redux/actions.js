import axios from "axios";

export const actions = {
    SIGN_IN: 'SIGN_IN',
    SIGN_OUT: 'SIGN_OUT',
    CREATE_USER: 'CREATE_USER',
    DARK_MODE: 'DARK_MODE',
    SET_PLACE: 'SET_PLACE',
    QUITE_PLACE: 'QUITE_PLACE',
    GET_PLACE: "GET_PLACE",
    CREATE_PLACE: 'CREATE_PLACE',
    DELETE_PLACE: 'DELETE_PLACE',
    UPDATE_PLACE: 'UPDATE_PLACE',
    ERROR: "ERROR",
    CLEAR_ERROR: "CLEAR_ERROR",
    CLEAR_ACTION: "CLEAR_ACTION"
};

const link = import.meta.env.VITE_BACK_URI;

console.log(link)

const BACK_URI = 'https://placestovisitbackend-production.up.railway.app';

// actions para los usuarios y el modo oscuro
export const sign_in = (user) => {
    return async (dispatch) => {
        try {
            const { mail, password } = user;
            const response = await axios.get(`${BACK_URI}/user/getUser?mail=${mail}&password=${password}`).then((res) => res.data);
            return dispatch({
                type: actions.SIGN_IN,
                payload: response
            });
        } catch (error) {
            return dispatch({
                type: actions.ERROR,
                payload: error.message
            });
        }
    };
};

export const create_user = (user) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BACK_URI}/user/createUser`, user).then((res) => res.data);
            return dispatch({
                type: actions.CREATE_USER,
                payload: response
            });
        } catch (error) {
            console.log(error)
            return dispatch({
                type: actions.ERROR,
                payload: error.message
            });
        }
    };
};

export const sign_out = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.SIGN_OUT,
            payload: null
        });
    };
};

export const dark_mode = (darkMode) => {
    return (dispatch) => {
        return dispatch({
            type: actions.DARK_MODE,
            payload: !darkMode
        });
    };
};

export const clear_error = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.CLEAR_ERROR,
            payload: null
        });
    };
};

// actions para los lugares

export const set_place = (place) => {
    return (dispatch) => {
        return dispatch({
            type: actions.SET_PLACE,
            payload: place
        });
    };
};

export const quite_place = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.QUITE_PLACE,
            payload: null
        });
    };
};

export const get_place = (UserId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${BACK_URI}/place/getPlace?UserId=${UserId}`).then((res) => res.data);
            return dispatch({
                type: actions.GET_PLACE,
                payload: response
            });
        } catch (error) {
            return dispatch({
                type: actions.ERROR,
                payload: error.message
            });
        }
    };
};

export const create_place = (place) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BACK_URI}/place/createPlace`, place).then((res) => res.data);
            return dispatch({
                type: actions.CREATE_PLACE,
                payload: response
            });
        } catch (error) {
            return dispatch({
                type: actions.ERROR,
                payload: error.message
            });
        }
    };
};

export const delete_place = (info) => {
    return async (dispatch) => {
        const { UserId, id } = info;
        try {
            const response = await axios.delete(`${BACK_URI}/place/deletePlace`, { data: { UserId, id } }).then((res) => res.data);
            return dispatch({
                type: actions.DELETE_PLACE,
                payload: response
            });
        } catch (error) {
            return dispatch({
                type: actions.ERROR,
                payload: error.message
            });
        }
    };
};

export const update_place = (info) => {
    return async (dispatch) => {
        try {
            const response = await axios.put(`${BACK_URI}/place/updatePlace`, info).then((res) => res.data);
            return dispatch({
                type: actions.UPDATE_PLACE,
                payload: response
            });
        } catch (error) {
            return dispatch({
                type: actions.ERROR,
                payload: error.message
            });
        }
    };
};

export const clear_action = () => {
    return (dispatch) => {
        return dispatch({
            type: actions.CLEAR_ACTION,
            payload: null
        });
    };
};