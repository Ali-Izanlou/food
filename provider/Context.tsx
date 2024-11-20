'use client'

import { createContext, useReducer, useState } from "react"
import { initialState, reducer } from "./reducer/reducer"
import { dataType, shoppType } from "@/lip/types/typeData"




interface ContextType {
  modal: boolean,
  food: dataType[],
  shoppingCart: shoppType[],
  setModal: (val: boolean) => void,
  getData: (data: dataType[]) => void
  addCart: (data: dataType) => void
}

const ContextType = {
  modal: false,
  food: [],
  shoppingCart: [],
  setModal: () => { },
  getData: () => { },
  addCart: () => { }
}

export const contextProvider = createContext<ContextType>(ContextType)

export default function Context({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [modal, setModal] = useState<boolean>(false)
  const [state, dispatch] = useReducer(reducer, initialState)

  const getData = (data: dataType[]) => dispatch({ type: "GET_DATA", payload: data })
  const addCart = (data: dataType) => dispatch({ type: "ADD_CART", payload: data })


  return (
    <contextProvider.Provider value={{ ...state, modal, setModal, getData,addCart }}>
      {children}
    </contextProvider.Provider>
  )
}
