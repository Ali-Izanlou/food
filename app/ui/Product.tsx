import Image from "next/image"
import QntButton from "./QntButton"
import { useContext } from "react"
import { ProductContext } from "../lib/context/Provider"
import clsx from "clsx"

export default function Product(props: any) {

    const { shoppingCart,addToCart } = useContext(ProductContext)


    type DataApi = {
        name: string,
        category: number,
        price: number,
        description: string,
        image: string,
        id: number,
        qty: number
    }


    return (

        <>
            {props.list && props.list.map((i:DataApi) =>

                props.route !== '/search' ?
                    (i.category === props.cat &&
                        <div key={i.name} className={clsx(" bg-zinc-700 h-40 w-full sm:w-[30rem] rounded-xl p-6  hover:bg-zinc-400 text-white hover:text-black text-md ")}>
                            <div className="flex items-center justify-between h-full space-x-3">
                                <div className="w-28 h-28 rounded-full ">
                                    <Image

                                        alt=""
                                        src={i.image}
                                        width={200}
                                        height={200}
                                        className="w-full h-full rounded-full"
                                    />
                                </div>
                                <div className="flex flex-col gap-3 text-wrap">
                                    <span className=" text-sm font-semibold" >{i.name}</span>
                                    <p >{i.description}</p>
                                </div>
                                <div className="flex flex-col items-center justify-between gap-3 h-full">
                                    <div>
                                        {!shoppingCart.find((c:DataApi) => i.id === c.id) && 
                                        <button onClick={() => addToCart(i)} className="bg-green-500 text-white rounded-full p-2 hover:bg-green-800 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 sm:size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                        </button>}
                                        {shoppingCart.find((c:DataApi) => i.id === c.id) && <QntButton value={shoppingCart.find((c:DataApi) => i.id === c.id && c)} qty={shoppingCart.map((c:DataApi) => i.id === c.id && c.qty)}/>}
                                    </div>
                                    <div>
                                        <span className=" font-semibold">${i.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>)


                    :

                    (

                        <div key={i.name} className=" bg-zinc-700 h-40 w-full sm:w-[30rem] rounded-xl p-2  hover:bg-zinc-400 text-white hover:text-black text-md ">
                            <div className="flex items-center justify-between h-full space-x-3">
                                <div className="w-28 h-28 rounded-full ">
                                    <Image

                                        alt=""
                                        src={i.image}
                                        width={200}
                                        height={200}
                                        className="w-full h-full rounded-full"
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className=" text-sm font-semibold" >{i.name}</span>
                                    <p >{i.description}</p>
                                </div>
                                <div className="flex flex-col items-center justify-between gap-3 h-full">
                                    <div>
                                    {!shoppingCart.find((c:DataApi) => i.id === c.id) && 
                                        <button onClick={() => addToCart(i)} className="bg-green-500 text-white rounded-full p-2 hover:bg-green-800 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 sm:size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                        </button>}
                                        {shoppingCart.find((c:DataApi) => i.id === c.id) && <QntButton value={shoppingCart.find((c:DataApi) => i.id === c.id && c)} qty={shoppingCart.map((c:DataApi) => i.id === c.id && c.qty)}/>}
                                    </div>
                                    <div>
                                        <span className=" font-semibold">${i.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>)



            )

            }


        </>


    )

} 