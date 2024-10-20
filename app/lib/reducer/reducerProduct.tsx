
export const initialState: {

    food: any[],
    searchFood: any[],
    shoppingCart: any[],

} = {

    food: [],
    searchFood: [],
    shoppingCart: localStorage.getItem('payment') ? JSON.parse(localStorage.getItem('payment') as string) : [],

}

type DataApi = {
    name: string,
    category: number,
    price: number,
    description: string,
    image: string,
    id: number,
    qty: number
}


export const reducerProduct = (state = initialState, action: { type: string, payload: any }) => {

    switch (action.type) {
        case "GET_PRODUCT":

            return {
                ...state,
                food: action.payload
            }

        case "VALUE_INPUT":


            return {
                ...state,
                searchFood: action.payload && state.food.filter((f) => f.name.toLowerCase().includes(action.payload.toLowerCase()))
            }

        case "ADD_CART":

            const addCart = [...state.shoppingCart, { ...action.payload, qty: 1 }]
            localStorage.setItem('payment', JSON.stringify(addCart))
            return {
                ...state,
                shoppingCart: addCart

            }

        case "INCRESE":

            const incCart = state.shoppingCart.map((c: DataApi) => c.id === action.payload.id ? { ...c, qty: c.qty + 1 } : c)
            localStorage.setItem('payment', JSON.stringify(incCart))

            return {
                ...state,
                shoppingCart: incCart
            }

        case "DECRASE":

            const decCart = action.payload.qty > 1 ? state.shoppingCart.map((c: DataApi) => c.id === action.payload.id ? { ...c, qty: c.qty - 1 } : c) : state.shoppingCart.filter(c => c.id !== action.payload.id)
            localStorage.setItem('payment', JSON.stringify(decCart))
            return {
                ...state,
                shoppingCart: decCart
            }

        case "REMOVE":

            const remCart = state.shoppingCart.filter((c: DataApi) => c.id !== action.payload.id)
            localStorage.setItem('payment', JSON.stringify(remCart))
            return {
                ...state,
                shoppingCart: remCart
            }

        default:
            return state
    }


}