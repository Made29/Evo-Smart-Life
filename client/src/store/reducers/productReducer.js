import { FETCH_ALL_PRODUCT } from "../actions/actionType";

const initialState = {
    products: [],
};

function productReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_PRODUCT:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
}

export default productReducer;
