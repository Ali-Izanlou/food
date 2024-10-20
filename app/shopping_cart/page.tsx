'use client'

import Image from "next/image";
import { useContext } from "react"
import { ProductContext } from "../lib/context/Provider"
import QntButton from "../ui/QntButton";
import Link from "next/link";

export default function ShoppingCart() {

    const { shoppingCart, remove } = useContext(ProductContext)

    return (
        <>
            {
                shoppingCart.length !== 0 ?
                    <div className="  sm:rounded-lg container ">
                        < table className="w-full sm:text-sm text-left  " >
                            <thead className=" text-gray-900  bg-zinc-500 ">
                                <tr>
                                    <th scope="col" className="sm:px-16 py-3">
                                        <span className="sr-only">Image</span>
                                    </th>
                                    <th scope="col" className="sm:px-6 sm:py-3">
                                        Product
                                    </th>
                                    <th scope="col" className="sm:px-6 sm:py-3">
                                        Qty
                                    </th>
                                    <th scope="col" className="sm:px-6 sm:py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="sm:px-6 sm:py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {shoppingCart && shoppingCart.map(c =>
                                    <tr key={c.id} className="bg-zinc-600 border-b  text-white ">
                                        <td className="p-4">
                                            <Image src={c.image} width={100} height={100} className="w-56 h-16 sm:w-32 sm:h-32 rounded-full" alt="" />
                                        </td>
                                        <td className="sm:px-6 sm:py-4 text-xs">
                                            {c.name}
                                        </td>
                                        <td className="sm:px-6 sm:py-4">
                                            {<QntButton value={c} qty={c.qty} />}
                                        </td>
                                        <td className="sm:px-6 sm:py-4 sm:text-lg ">
                                            ${c.price}
                                        </td>
                                        <td className="sm:px-6 sm:py-4">
                                            <button onClick={() => remove(c)} className="text-xs text-white bg-red-500 p-1 sm:p-2 rounded-lg">Remove</button>
                                        </td>
                                    </tr>)}

                            </tbody>
                            <tfoot className=" text-gray-900   bg-zinc-500 ">
                                <tr>
                                    <td  className="sm:px-16 sm:py-3">

                                    </td>
                                    <td  className="sm:px-6 sm:py-3">

                                    </td>
                                    <td  className="sm:px-6 sm:py-3">

                                    </td>
                                    <td  className=" sm:px-6 sm:py-3 sm:text-lg">
                                        Total : ${shoppingCart.reduce((total, c) => {
                                            return total + c.price * c.qty
                                        }, 0)}
                                    </td>
                                    <td  className="sm:px-6 sm:py-3">
                                        <button className="  text-white bg-green-600 p-1 sm:p-2 text-xs rounded-lg">payment</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table >
                    </div > :


                    <div className="flex items-center justify-center mt-44">

                        <div className="flex flex-col items-center gap-3 sm:gap-5 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8 sm:size-14">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                            <span className=" sm:text-3xl">No product found</span>
                            <Link href={'/'} className="p-2 sm:p-4 sm:text-xl bg-green-500 rounded-xl">
                                menu
                            </Link>
                        </div>

                    </div>



            }
        </>
    )


}