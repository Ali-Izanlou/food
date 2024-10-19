'use client'

import { useContext } from "react";
import Menu from "./ui/Menu";
import { ProductContext } from "./lib/context/Provider";
import useSWR from "swr";
import axios from "axios";


export default function Home() {

  const { food, getProduct } = useContext(ProductContext)

    const fetcher = (url: string) => axios.get(url).then(res => getProduct(res.data))
    const { } = useSWR('http://185.181.182.21:8000/restaurant/api/v1/restaurant_product/', fetcher)

    console.log(food)

  return (
    <div className="flex items-center justify-center h-56 sm:h-96 max-lg:space-y-8 lg:space-x-8 flex-wrap  text-2xl sm:text-4xl">
      <Menu />
    </div>

  )
}
