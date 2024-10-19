
export const initialState: { 

    food : any[],
    searchFood : any[]

} = {

    food : [],
    searchFood : []

}



export const reducerProduct = (state = initialState, action: {type:string, payload:any}) => {

    switch (action.type) {
        case "GET_PRODUCT":
            
            return {
                ...state,
                food: action.payload
            }
        case "VALUE_INPUT":

            
            return {
                ...state,
                searchFood:action.payload && state.food.filter((f) => f.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
    
        default:
           return state
    }
       

}