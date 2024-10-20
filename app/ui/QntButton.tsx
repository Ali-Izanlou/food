import { useContext } from "react"
import { ProductContext } from "../lib/context/Provider"
import clsx from "clsx"

export default function QntButton(props:any) {

    const {increase, decrease} = useContext(ProductContext)


    return (

        <div className="flex items-center">
            <button onClick={() => decrease(props.value)} className="inline-flex items-center justify-center p-1 sm:me-3 text-sm font-medium sm:h-6 sm:w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                <span className="sr-only">Quantity button</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                </svg>
            </button>
            <div>
                <span className="bg-gray-50 border border-gray-300 text-gray-900 text-sm h-6  w-6 sm:h-7 sm:w-7 rounded-full flex items-center justify-center " >{props.qty}</span>
             </div>
            <button onClick={() => increase(props.value)} className="inline-flex items-center justify-center sm:h-6 sm:w-6 p-1 sm:ms-3 text-sm font-medium text-gray-500 bg-green-500 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-200 hover:bg-green-600" type="button">
                <span className="sr-only">Quantity button</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                </svg>
            </button>
        </div>

    )
}