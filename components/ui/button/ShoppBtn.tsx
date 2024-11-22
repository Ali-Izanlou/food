import { contextProvider } from "@/provider/Context"
import { useContext } from "react"

export default function ShoppBtn(props:any) {

    const {increment, decrement} = useContext(contextProvider)

    return (
        <div  className="inline-flex gap-8  py-3 px-8 items-center justify-center rounded-r-full rounded-l-full text-Rose-50 bg-Red  ">
            <button  onClick={() => decrement(props.item)} className= " border px-1 py-2 border-Rose-50 rounded-full text-Rose-50 group hover:bg-Rose-50" >
                <svg className="fill-Rose-50 group-hover:fill-Red"  xmlns="http://www.w3.org/2000/svg" width="10" height="2"  viewBox="0 0 10 2"><path   d="M0 .375h10v1.25H0V.375Z" /></svg>
            </button>
            <span className="cursor-not-allowed">{props.item.qty}</span>
            <button onClick={() => increment(props.item)}  className= " border p-1 border-Rose-50 rounded-full group hover:bg-Rose-50">           
                <svg className="fill-Rose-50 group-hover:fill-Red" xmlns="http://www.w3.org/2000/svg" width="10" height="10"  viewBox="0 0 10 10"><path  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" /></svg>
            </button>

        </div>
    )
}
