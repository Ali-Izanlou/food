'use client'

import { contextProvider } from "@/provider/Context"
import clsx from "clsx"
import Image from "next/image"
import { useContext } from "react"


export default function Modal() {

    const { shoppingCart, setModal } = useContext(contextProvider)

    return (
        <div  id="modal" className=" flex items-center justify-center  fixed top-0 left-0 w-full h-full  bg-black bg-opacity-80 ">
            <div className="flex flex-col gap-8 bg-white p-8 rounded-lg desktop:w-[30%] tablet:w-[50%] w-full ">
                <div>
                    <div className="flex items-center justify-between mb-5">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z" fill="#1EA575" />
                            <path d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z" fill="#1EA575" />
                        </svg>
                        <button onClick={() => setModal(false)} className="border-2 border-Rose-300 rounded-full group hover:border-Rose-500 p-1">
                            <svg className="fill-Rose-300 group-hover:fill-Rose-500 " xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 10 10">
                                <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
                            </svg>
                        </button>

                    </div>
                    <h2 className="text-Rose-900 font-bold text-5xl mb-2">Order Confirmed</h2>
                    <p className="text-Rose-500 font-normal text-base">We hope you enjoy your food!</p>
                </div>
                <div className={clsx("bg-Rose-50 p-6 rounded-lg h-[22.6rem]", {"overflow-y-scroll" : shoppingCart.length > 3})}>
                    {shoppingCart.map(f =>
                        <div key={f.name} className="flex items-center justify-between  border-b border-Rose-300 py-4">
                            <div className="flex gap-2">
                                <Image
                                    src={f.image.desktop}
                                    alt="image"
                                    width={50}
                                    height={50}
                                    className="rounded-lg "
                                    

                                />
                                <div className="space-y-1">
                                    <h3 className="text-Rose-900 font-semibold">{f.name}</h3>
                                    <div className="space-x-3">
                                        <span className="text-Red font-semibold ">{f.qty}x</span>
                                        <span className="text-Rose-400 font-semibold ">@ ${f.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                            <span className="text-Rose-900 font-semibold text-lg">${(f.price * f.qty).toFixed(2)}</span>
                        </div>
                    )}
                    <div className="flex items-center justify-between mt-7 text-Rose-900">
                        <span >Order Total</span>
                        <span className="text-2xl font-bold">${shoppingCart.reduce((total, item) => { return total + (item.price * item.qty) }, 0).toFixed(2)}</span>
                    </div>
                </div>
                <button className="bg-Red text-Rose-50 rounded-r-full rounded-l-full py-3 hover:bg-Rose-500 ">Start New Order</button>
            </div>
        </div>
    )
}
