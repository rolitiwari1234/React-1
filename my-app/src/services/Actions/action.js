import {ADD_TO_CART} from '../constants'

export const addToCart=(data)=>{
    return{
        type:ADD_TO_CART,
        data:data
    }
}
export default removeToCart = (data)=>{
    return{
        type:REMOVE_TO_CART,
        data:data
    }
}