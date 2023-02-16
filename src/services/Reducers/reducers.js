import {AddToCart,RemoveToCart} from '../Constant'

const initialState={
    cardData:[]
}

export default function  cardItems(state=[],action)
{
switch (action.type) {
    case AddToCart:
        //  console.warn('reducers',action);
        return[
            ...state,
            {cardData:action.data}
        ]
        case RemoveToCart:
            state.pop()
            //  console.warn('reducers',action);
            return[
                
                ...state,
            ]
break;
    default:
       return state
}
}
