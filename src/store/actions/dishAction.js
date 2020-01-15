import axiosOrders from "../../axios-orders";

import {ADD_DISH, FETCH_DISHES_FAILURE, FETCH_DISHES_REQUEST, FETCH_DISHES_SUCCESS, REMOVE_DISH} from "./actionTypes";

export const fetchDishesRequest = () => {
    return {type: FETCH_DISHES_REQUEST};
};

export const fetchDishesSuccess = dishes => {
    return {type: FETCH_DISHES_SUCCESS, dishes};
};

export const fetchDishesFailure = error => {
    return {type: FETCH_DISHES_FAILURE, error}
};


export const fetchDishes = () => {
    return (dispatch) => {
        dispatch(fetchDishesRequest());

        axiosOrders.get('/dishes.json').then(response => {
            dispatch(fetchDishesSuccess(response.data));
        }, error => {
            dispatch(fetchDishesFailure(error));
        });
    }
};

export const addDish = dishId => {
    return {type: ADD_DISH, dishId};
};

export const removeDish = dishId => {
    return {type: REMOVE_DISH, dishId};
};