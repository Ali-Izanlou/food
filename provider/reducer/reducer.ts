import { dataType, shoppType } from "@/lip/types/typeData"

export const initialState : {
    food: dataType[],
    shoppingCart: shoppType[],
} = {

    food : [],
    shoppingCart : localStorage.getItem('foods') as string ? JSON.parse(localStorage.getItem('foods') as string) : [],

}

export const reducer = (state = initialState, action:{type:string, payload:any})  => {

    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                food: action.payload
            }

        case "ADD_CART":
            const addCart = [...state.shoppingCart ,{...action.payload, qty: 1}]
            localStorage.setItem('foods', JSON.stringify(addCart))

            return {
                ...state,
                shoppingCart: addCart
            }

        case "INCREMENT":
            const increment = state.shoppingCart.map(f => f.name === action.payload.name  ? {...f , qty: f.qty + 1} : f) 
            localStorage.setItem('foods', JSON.stringify(increment))
            
            return {
                ...state,
                shoppingCart: increment
            }
    
        case "DECREMENT":
            const decrement = action.payload.qty > 1 ? state.shoppingCart.map(f => f.name === action.payload.name  ? {...f , qty: f.qty - 1} : f) : state.shoppingCart.filter(f => f.name !== action.payload.name) 
            localStorage.setItem('foods', JSON.stringify(decrement))
            
            return {
                ...state,
                shoppingCart: decrement
            }
    
        case "REMOVE":
            const remove = state.shoppingCart.filter(f => f.name !== action.payload.name)
            localStorage.setItem('foods', JSON.stringify(remove))
            
            return {
                ...state,
                shoppingCart: remove
            }
    
        default:
            return state
    }

}