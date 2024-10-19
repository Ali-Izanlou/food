'use client'

import { createContext, useReducer } from "react";
import { reducerProduct } from "../reducer/reducerProduct";
import { initialState } from "../reducer/reducerProduct";

type CustomizationProps = {
    food:any[],
    searchFood:any[],
    getProduct: (val:any) => void
    valueInput: (val:string) => void
};

const initialType: CustomizationProps = {
    food:[],
    searchFood:[],
    getProduct: () => {},
    valueInput: () => {}
    

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
    


    return (
        <ProductContext.Provider value= {{...state , getProduct, valueInput}}>
            {children}
        </ProductContext.Provider>

    );
}