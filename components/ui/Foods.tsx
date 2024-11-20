'use client'

import axios from "axios"
import Image from "next/image"
import useSWR from "swr"
import AddBtn from "./button/AddBtn"
import ShoppBtn from "./button/ShoppBtn"
import ShoppingCart from "./ShoppingCart"
import Modal from "./Modal"
import { useContext } from "react"
import { contextProvider } from "@/provider/Context"

export default function Foods() {
    
    const {food , shoppingCart ,modal, getData} = useContext(contextProvider)

    const fetcher = (url: string) => axios.get(url).then(res => getData(res.data))

    const { data, isLoading, error } = useSWR("http://localhost:8000/foods/", fetcher)

    // console.log(data)

    interface dataType {

        image: {
            thumbnail: string,
            mobile: string,
            tablet: string,
            desktop: string
        },
        name: string,
        category: string,
        price: number
    }

    // document.body.addEventListener('click', () => setModal(false))

    console.log(shoppingCart)

    return (

        <>
            <div className="container tablet:flex my-20">
                <div className="">
                    <h1 className="text-Rose-900 font-bold text-5xl mb-10" >Desserts</h1>

                    <div className="grid desktop:grid-cols-3 tablet:grid-cols-2 gap-8">
                        {food && food.map((f: dataType) =>

                            <div className="flex flex-col gap-10 " key={f.name} >

                                <div className="relative">
                                    <Image
                                        src={f.image.desktop}
                                        alt="image"
                                        width={350}
                                        height={350}
                                        className="rounded-lg "
                                        priority

                                    />
                                    <div className="absolute -bottom-5 left-[60px] ">
                                         <AddBtn item={f}/> 
                                        {shoppingCart.find(i => i.name === f.name) && <ShoppBtn/>}
                                        {/* <ShoppBtn /> */}
                                    </div>
                                </div>


                                <div>
                                    <span className="text-Rose-500 ">{f.category}</span>
                                    <h3 className="text-Rose-900 font-semibold text-xl">{f.name}</h3>
                                    <span className="text-Red font-semibold text-xl">${f.price.toFixed(2)}</span>
                                </div>
                            </div>

                        )}

                    </div>
                </div>
                <div className="tablet:ml-10 max-tablet:mt-10 tablet:w-[30%] w-full">
                    {isLoading === false && <ShoppingCart />}
                </div>
            </div>
            {modal && <Modal />}
        </>

    )
}
