import { FETCH_ALL_PRODUCT } from "./actionType";
const url = "http://localhost:3000";

export const fetchProduct = (payload) => {
    return {
        type: FETCH_ALL_PRODUCT,
        payload,
    };
};


// mengambil semua list product untuk ditampilak pada layar
export const fetchAllProducts = () => {
    return (dispatch) => {
        fetch(`${url}/products`)
        .then((response) => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then((data) => dispatch(fetchProduct(data)))
        .catch((error) => {
            console.log("error: ", error)
        })
    }
}

