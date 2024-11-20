import { dataType, shoppType } from "@/lip/types/typeData"

export const initialState : {
    food: dataType[],
    shoppingCart: shoppType[]
} = {

    food : [],
    shoppingCart : []

}

export const reducer = (state = initialState, action:{type:string, payload:any})  => {

    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                food: action.payload
            }

        case "ADD_CART":
            // const findCart = state.shoppingCart.find(f => f.name === action.payload.name) ? true : false 
            return {
                ...state,
                shoppingCart:  [...state.shoppingCart ,{...action.payload, qty: 1}]
            }
    
        default:
            return state
    }

}