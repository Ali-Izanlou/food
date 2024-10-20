'use client'

import axios from "axios"
import { useParams } from "next/navigation"
import useSWR from "swr"
import Menu from "../ui/Menu"
import Product from "../ui/Product"
import { useContext } from "react"
import { ProductContext } from "../lib/context/Provider"


export default function Products() {

    const { food, getProduct } = useContext(ProductContext)

    const fetcher = (url: string) => axios.get(url).then(res => getProduct(res.data))
    const { } = useSWR('http://185.181.182.21:8000/restaurant/api/v1/restaurant_product/', fetcher)

    const id = useParams()
    let cat: number = 0

    switch (id.name) {
        case "Arabicfoods":
            cat = 1
            break
        case "iranianfood":
            cat = 2
            break
        case "coffeshop":
            cat = 3
            break


        default:
            cat
    }

    return (

        <>
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4  h-28 p-3 sm:h-52 bg-zinc-800 container">
                <Menu route={id} />
            </div>

            <div className="mt-10  w-full max-sm:h-screen max-sm:overflow-y-scroll ">
                <div className="flex flex-wrap items-center justify-center max-2xl:space-y-4 lg:space-x-4">
                    {<Product list={food} cat={cat} />}
                </div>
            </div>
        </>


    )

} 