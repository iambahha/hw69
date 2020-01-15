import axiosOrders from "../../axios-orders";
import {ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS} from "./actionTypes";

export const createOrderRequest = () => {
    return {type: ORDER_REQUEST};
};

export const createOrderSuccess = () => {
    return {type: ORDER_SUCCESS};
};

export const createOrderFailure = error => {
    return {type: ORDER_FAILURE, error}
};

export const createOrder = orderData => {
    return dispatch => {
        dispatch(createOrderRequest());
        axiosOrders.post('orders.json', orderData).then(() => {
                dispatch(createOrderSuccess());
            }, error => {dispatch(createOrderFailure(error))}
        );
    }
};