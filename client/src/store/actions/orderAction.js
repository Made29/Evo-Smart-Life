import { FETCH_ALL_ORDER, BUY_PRODUCT } from "./actionType";
const url = "http://localhost:3000"

export const fetchOrder = (payload) => {
    return {
        type: FETCH_ALL_ORDER,
        payload,
    };
};

export const addProduct = (payload) => {
    return {
        type: BUY_PRODUCT,
        payload,
    };
};

//mengambil semua data yang ada ditable order untuk ditampilkan
export const fetchAllOrders = () => {
    return (dispatch) => {
        fetch(`${url}/orders`)
        .then((response) => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then((data) => dispatch(fetchOrder(data)))
        .catch((error) => {
            console.log("error: ", error)
        })
    }
}

//menambahkan product ke table order
export const addProductToOrderList = (productId) => {
    return (dispatch) => {
        fetch(`${url}/buyProducts/${productId}`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
        })
        .then((response) => {
            if(!response.ok){
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then((data) => dispatch(addProduct(data)))
        .catch((error) => {
            console.log("error: ", error)
        })
    }
}