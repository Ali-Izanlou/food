'use client'

import { createContext, useReducer } from "react";
import { reducerProduct } from "../reducer/reducerProduct";
import { initialState } from "../reducer/reducerProduct";

type CustomizationProps = {
    food:any[],
    searchFood:any[],
    shoppingCart : any[],
    getProduct: (val:any) => void
    valueInput: (val:string) => void
    addToCart: (val:any) => void
    increase: (val:any) => void
    decrease: (val:any) => void
    remove: (val:any) => void
};

const initialType: CustomizationProps = {
    food:[],
    searchFood:[],
    shoppingCart : [],
    getProduct: () => {},
    valueInput: () => {},
    addToCart: () => {},
    increase: () => {},
    decrease: () => {},
    remove: () => {},
    

};

export const ProductContext = createContext(initialType)

export default function ProductProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [state, dispatch] = useReducer(reducerProduct, initialState)

    const getProduct = (data:object[]) => dispatch({type: "GET_PRODUCT", payload: data})
    
    const valueInput = (value:string) => dispatch({type: "VALUE_INPUT", payload: value})

    const addToCart = (value:any) => dispatch({type: "ADD_CART", payload: value})

    const increase = (value:any) => dispatch({type: "INCRESE", payload: value})

    const decrease = (value:any) => dispatch({type: "DECRASE", payload: value})

    const remove = (value:any) => dispatch({type: "REMOVE", payload: value})
    


    return (
        <ProductContext.Provider value= {{...state , getProduct, valueInput, addToCart, increase , decrease, remove}}>
            {children}
        </ProductContext.Provider>

    );
}