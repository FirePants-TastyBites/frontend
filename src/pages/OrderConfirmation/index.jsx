import { useLocation, useNavigate, useParams } from 'react-router-dom';
import PinkThingy from '../../components/PinkThingy';
import GreenLine from '../../components/GreenLine';
import Button from '../../components/Button';

function OrderConfirmation() {
    const navigate = useNavigate();
    const id = useParams().id;
    const location = useLocation();

    console.log(id);

    return (
        <main className="confirmation">
            <header>
                <h1>Success</h1>
                <GreenLine />
            </header>
            <section className="confirmaiton-info">
                <p>Your Tasty Bites order is on it’s way. Thanks for choosing us!</p>
                <PinkThingy />
            </section>
            <section className="time">
                    <h4>Estimated Delivery Time</h4>
                    <div>
                        <p>12.57</p>
                    </div>
                </section>
                <section className="address">
                    <h4>Order ID</h4>
                    <div>
                        <p>order id here</p>
                        <button>Show more</button>
                    </div>
                </section>

            <Button label={"Go to Home Page"} type={"primary"} onClick={() => navigate('/home')} />

        </main>
    );
}

export default OrderConfirmation;