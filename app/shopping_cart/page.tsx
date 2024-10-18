import Image from "next/image";

export default function ShoppingCart() {

    return (
        <div className=" overflow-x-auto shadow-md sm:rounded-lg mt-28">
            <table className="w-full text-sm text-left  ">
                <thead className="text-sm text-gray-900  bg-zinc-500 ">
                    <tr>
                        <th scope="col" className="px-16 py-3">
                            <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Qty
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-zinc-600 border-b  text-white ">
                        <td className="p-4">
                            <Image src="/image/ir1.jpg" width={100} height={100} className=" w-56 h-36 rounded-full" alt="Apple Watch" />
                        </td>
                        <td className="px-6 py-4  text-lg">
                            Apple Watch
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 " type="button">
                                    <span className="sr-only">Quantity button</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                    </svg>
                                </button>
                                <div>
                                    <span className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  p-2 " >1</span>
                                </div>
                                <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-green-500 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-gray-200 hover:bg-green-600" type="button">
                                    <span className="sr-only">Quantity button</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </button>
                            </div>
                        </td>
                        <td className="px-6 py-4 text-lg ">
                            $599
                        </td>
                        <td className="px-6 py-4">
                            <button className=" text-red-600  ">Remove</button>
                        </td>
                    </tr>

                </tbody>
                <tfoot className="text-sm text-gray-950  bg-zinc-500 ">
                    <tr>
                        <td scope="col" className="px-16 py-3">

                        </td>
                        <td scope="col" className="px-6 py-3">

                        </td>
                        <td scope="col" className="px-6 py-3">

                        </td>
                        <td scope="col" className="px-6 py-3">
                            Total
                        </td>
                        <td scope="col" className="px-6 py-3">
                            <button>payment</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )


}