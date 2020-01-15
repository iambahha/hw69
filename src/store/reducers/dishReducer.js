import {
    FETCH_DISHES_FAILURE,
    FETCH_DISHES_REQUEST,
    FETCH_DISHES_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
    dishes: {},
    loading: false,
    error: null,
};

const dishReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DISHES_REQUEST:
            return {...state, loading: true};
        case FETCH_DISHES_SUCCESS:
            return {...state, loading: false, dishes: action.dishes};
        case FETCH_DISHES_FAILURE:
            return {...state, loading: false, error: action.error};
        default:
            return state;
    }
};

export default dishReducer;