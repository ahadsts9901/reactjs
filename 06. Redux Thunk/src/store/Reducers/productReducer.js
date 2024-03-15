import ACTION_TYPES from "../ActionTypes/ActionTypes"

const PRODUCTS_INITIAL_STATE = {
    products:[],
    isLoading:false
}

const GetProductsReducer = (state = PRODUCTS_INITIAL_STATE,action)=>{
    switch(action.type){
        case ACTION_TYPES.FETCH_PRODUCTS:
            return{
                ...state,
                isLoading:true
            }
        case ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products:[...state.products,...action.payload],
                isLoading:false
            }

        case ACTION_TYPES.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                isLoading:false
            }
        default:
            return {
                ...state
            }
    }
}

export {
    GetProductsReducer
}