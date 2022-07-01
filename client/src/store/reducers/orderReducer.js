import { FETCH_ALL_ORDER, BUY_PRODUCT } from "../actions/actionType";

const initialState = {
    orders: [],
};

function orderReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_ORDER:
            return {
                ...state,
                orders: action.payload,
            };
        case BUY_PRODUCT:
            state.orders.push(action.payload);
            return {
                ...state,
                orders: state.orders,
            };
        default:
            return state;
    }
}

export default orderReducer;
