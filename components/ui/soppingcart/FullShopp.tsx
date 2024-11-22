'use client'
import { contextProvider } from "@/provider/Context"
import { useContext } from "react"

export default function FullShopp() {



    const { shoppingCart, setModal, remove } = useContext(contextProvider)

    return (
        <div className="flex flex-col gap-5">
            {shoppingCart && shoppingCart.map(f =>
                <div key={f.name} className="flex items-center justify-between border-b border-Rose-300 pb-4">
                    <div className="space-y-1">
                        <h3 className="text-Rose-900 font-semibold">{f.name}</h3>
                        <div className="space-x-3">
                            <span className="text-Red font-semibold ">{f.qty}x</span>
                            <span className="text-Rose-400 font-semibold ">@ ${f.price.toFixed(2)}</span>
                            <span className="text-Rose-500 font-semibold ">${(f.price * f.qty).toFixed(2)}</span>
                        </div>
                    </div>
                    <button onClick={() => remove(f)} className="border-2 border-Rose-300 rounded-full group hover:border-Rose-500 p-1">
                        <svg className="fill-Rose-300 group-hover:fill-Rose-500 " xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                            <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
                        </svg>
                    </button>
                </div>
            )}
            <div className="flex items-center justify-between  text-Rose-900">
                <span>Order Total</span>
                <span className="text-2xl font-bold">${shoppingCart.reduce((total, item) =>{ return total + (item.price * item.qty) } ,0).toFixed(2)}</span>
            </div>
            <button onClick={() => setModal(true)} className="bg-Red text-Rose-50 rounded-r-full rounded-l-full py-3 hover:bg-Rose-500 ">Confirm Order</button>
        </div>
    )
}
