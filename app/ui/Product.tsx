import Image from "next/image"

export default function Product(props: any) {


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
            {props.data && props.data.map((i: DataApi) => 
                props.route  !== '/search' ?
                    (i.category === props.cat &&
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
                    </div>)

                    :
                    (<div key={i.name} className=" bg-zinc-700 h-40 w-full sm:w-[30rem] rounded-xl p-2  hover:bg-zinc-400 text-white hover:text-black text-md container">
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
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <div>
                                            <span className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  h-7 w-7 rounded-full flex items-center justify-center " >1</span>
                                        </div>
                                        <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-green-500 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-200 hover:bg-green-600" type="button">
                                            <span className="sr-only">Quantity button</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                    </div>
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