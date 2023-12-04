import { actions } from './actions';

const initialState = {
    places: [],
    user: null,
    place: {},
    error: null,
    darkMode: false,
    action: null
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SIGN_IN:
            return {
                ...state,
                user: action.payload
            };

        case actions.SIGN_OUT:
            return {
                ...state,
                user: action.payload
            };

        case actions.CREATE_USER:
            return {
                ...state,
                action: action.payload
            };

        case actions.DARK_MODE:
            return {
                ...state,
                darkMode: action.payload
            };

        case actions.ERROR:
            return {
                ...state,
                error: action.payload
            };

        case actions.CLEAR_ERROR:
            return {
                ...state,
                error: action.payload
            };

        case actions.SET_PLACE:
            return {
                ...state,
                place: action.payload
            };

        case actions.GET_PLACE:
            return {
                ...state,
                places: action.payload
            };

        case actions.CREATE_PLACE:
            return {
                ...state,
                action: action.payload
            };

        case actions.DELETE_PLACE:
            return {
                ...state,
                action: action.payload
            };

        case actions.UPDATE_PLACE:
            return {
                ...state,
                action: action.payload
            };

        case actions.CLEAR_ACTION:
            return {
                ...state,
                action: action.payload
            }

        default:
            return state;
    }
}