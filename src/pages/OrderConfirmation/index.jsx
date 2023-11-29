import { useLocation, useNavigate, useParams } from 'react-router-dom';
import PinkThingy from '../../components/PinkThingy';
import GreenLine from '../../components/GreenLine';
import Button from '../../components/Button';
import './OrderConfirmation.scss'
import DetailsButton from '../../components/DetailsButton';
import { useEffect, useState } from 'react';

function OrderConfirmation() {
    const [showMore, setShowMore] = useState(false);
    const navigate = useNavigate();
    const id = useParams().id;

    // useEffect(async () => {
    //     await null;
        
    // }, [])

    return (
        <main className="confirmation">
            <header>
                <h1>Success</h1>
                <GreenLine />
            </header>
            <section className="confirmation-info">
                <section className="message">
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
                        <p>{id}</p>
                        <DetailsButton onClick={() => setShowMore(!showMore)}>
                            {
                                showMore ? 'Show less' : 'Show more'
                            }
                        </DetailsButton>
                    </div>
                    {
                        showMore &&
                        <section>
                            More info here <br/>
                            More info here <br/>
                            More info here
                        </section>
                    }
                </section>
            </section>

            <Button label={"Go to Home Page"} type={"primary"} onClick={() => navigate('/home')} />

        </main>
    );
}

export default OrderConfirmation;