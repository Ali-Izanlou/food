import FullShopp from "./soppingcart/FullShopp";
import EmptyShopp from "./soppingcart/EmptyShopp";

export default function ShoppingCart() {
    return (
        <div className="bg-Rose-50 w-full rounded-lg p-8">
            <h2 className="text-Red font-semibold text-3xl mb-10 ">Your Cart (0)</h2>
            <EmptyShopp/>
            <FullShopp/>

        </div>
    )
}
