'use client'

import axios from "axios"
import { usePathname } from "next/navigation"
import useSWR from "swr"
import Product from "../ui/Product"
import { useContext } from "react"
import { ProductContext } from "../lib/context/Provider"
import Image from "next/image"


export default function Search() {

    const { searchFood, getProduct, valueInput} = useContext(ProductContext)


    const fetcher = (url: string) => axios.get(url).then(res => getProduct(res.data))
    const { isLoading, error } = useSWR('http://185.181.182.21:8000/restaurant/api/v1/restaurant_product/', fetcher)

    const route = usePathname()

    console.log(searchFood)

    type DataApi = {
        name: string,
        category: number,
        price: number,
        description: string,
        image: string,
        id: number
    }



    return (

        <>

            <div className=" flex flex-col items-center gap-8">
                <div className="w-full sm:w-4/5">
                    <input onChange={e => valueInput(e.target.value)} type="text" className="w-full border-b-2 border-green-500 bg-transparent outline-none p-3 text-white " placeholder="Search for food..." />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 ">
                    {/* {isLoading &&
                        <div className="flex items-center justify-center h-screen">
                            <div role="status">
                                <svg aria-hidden="true" className=" w-8 h-8 text-gray-200 animate-spin  fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>}

                    {error &&
                        <div className="flex items-center justify-center h-screen">
                            <span className="text-white">{error.message}</span>
                        </div>} */}
                    {searchFood && searchFood.map((i: DataApi) =>

                        <div key={i.name} className=" bg-zinc-700 h-40 w-full sm:w-[30rem] rounded-xl p-2  hover:bg-zinc-400 text-white hover:text-black text-md container">
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
                                        <button className="bg-green-500 text-white rounded-full p-2 hover:bg-green-800 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 sm:size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                            </svg>
                                        </button>
                                        <div className="hidden  items-center ">
                                            <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                                </svg>
                                            </button>
                                            <div>
                                                <span className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  h-7 w-7 rounded-full flex items-center justify-center " >1</span>
                                            </div>
                                            <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-green-500 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-200 hover:bg-green-600" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <span className=" font-semibold">${i.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                </div>
            </div>
        </>


    )

}


