import {ADD_DISH, REMOVE_DISH} from "../actions/actionTypes";

const initialState = {
    userOrder: {},
    userContact: {},
    loading: false,
    error: null,
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISH:
            const userOrder = {...state.userOrder};
            if (!(action.dishId in state.userOrder)) {
                userOrder[action.dishId] = 1;
            } else {
                userOrder[action.dishId]++;
            }
            return {...state, userOrder};

        case REMOVE_DISH:
            if (state.userOrder[action.dishId] > 1) {
                return {
                    ...state,
                    userOrder: {
                        ...state.userOrder,
                        [action.dishId]: state.userOrder[action.dishId] - 1
                    }
                };
            } else if (state.userOrder[action.dishId] === 1) {
                const userOrder = {...state.userOrder};
                delete userOrder[action.dishId];
                return {
                    ...state,
                    userOrder
                };
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default orderReducer;