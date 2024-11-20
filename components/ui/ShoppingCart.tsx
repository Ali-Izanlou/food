'use client'


import { useContext } from "react"
import { contextProvider } from "@/provider/Context"
import FullShopp from "./soppingcart/FullShopp";
import EmptyShopp from "./soppingcart/EmptyShopp";

export default function ShoppingCart() {

    const {shoppingCart} = useContext(contextProvider)

    return (
        <div className="bg-Rose-50 w-full rounded-lg p-8">
            <h2 className="text-Red font-semibold text-3xl mb-10 ">Your Cart (0)</h2>
            {shoppingCart.length === 0 ? <EmptyShopp/> : <FullShopp/>}
            
        </div>
    )
}
