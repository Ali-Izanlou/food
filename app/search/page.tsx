'use client'

import axios from "axios"
import { usePathname } from "next/navigation"
import useSWR from "swr"
import Product from "../ui/Product"
import { useContext } from "react"
import { ProductContext } from "../lib/context/Provider"


export default function Search() {

    const { searchFood, getProduct, valueInput } = useContext(ProductContext)


    const fetcher = (url: string) => axios.get(url).then(res => getProduct(res.data))
    const { } = useSWR('http://185.181.182.21:8000/restaurant/api/v1/restaurant_product/', fetcher)

    const route = usePathname()

    return (

        <>


            <div className="w-full sm:w-4/5">
                <input onChange={e => valueInput(e.target.value)} type="text" className="w-full border-b-2 border-green-500 bg-transparent outline-none p-3 text-white " placeholder="Search for food..." />
            </div>
            <div className="mt-10  w-full max-sm:h-screen max-sm:overflow-y-scroll ">
                <div className="flex flex-wrap items-center justify-center max-sm:space-y-4 sm:space-x-4">
                    {<Product route={route} list={searchFood} />}
                </div>
            </div>
        </>


    )

}


