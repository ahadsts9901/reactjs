import ACTION_TYPES from "../ActionTypes/ActionTypes";

const getProducts = () => {
    return async (dispatch) => {
        dispatch({
            type: ACTION_TYPES.FETCH_PRODUCTS,
        })
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            dispatch({
                type: ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
                payload: data
            })
            
        } catch (error) {
            dispatch({
                type: ACTION_TYPES.FETCH_PRODUCTS_ERROR,
            })
        }
    }
}

export {
    getProducts
}