import {AddToCart,RemoveToCart} from '../Constant'

export const addToCart=(data)=>{
     console.warn('action',data);
    return{
    type:AddToCart,
        data:data
    }
}

export const removeToCart=()=>{
    console.warn("action");
    return{
    type:'RemoveToCart',
       
    }
}