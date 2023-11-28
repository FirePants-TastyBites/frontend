import { useLocation } from "react-router-dom";
import GreenLine from "../../components/GreenLine";

function Checkout() {
    const order = useLocation().state;
    console.log("order: ", order);

    return (
        <main className="checkout">
            <header>
                <h1>Checkout</h1>
                <GreenLine />
            </header>

        </main>
    );
}

export default Checkout;