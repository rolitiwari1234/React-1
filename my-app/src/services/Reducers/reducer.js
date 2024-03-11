import { ADD_TO_CART } from '../constants'

const initialState = {
    cardData : []
}

export default function cardItems(state=initialState,action)
{
    // eslint-disable-next-line default-case
   switch(action.type){
    case ADD_TO_CART:
        console.warn("reducer",action)
    return{
        ...state,
        cardData:action.data
    }
    break;
    default:
        return state
   }
}