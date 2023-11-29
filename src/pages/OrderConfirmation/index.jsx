import { useLocation, useNavigate, useParams } from 'react-router-dom';
import PinkThingy from '../../components/PinkThingy';
import GreenLine from '../../components/GreenLine';
import Button from '../../components/Button';
import './OrderConfirmation.scss'
import DetailsButton from '../../components/DetailsButton';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function OrderConfirmation() {
    const order = useLocation().state;
    const [showMore, setShowMore] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [isLocked, setIsLocked] = useState(false);
    const navigate = useNavigate();
    const id = useParams().id;

    const orderItems = order.orderItems.map((item, i) => {
        return (
            <li key={i}>
                <p>{item.qty} {item.itemName}</p>
            </li>
        )
    });

    const orderStatus = order.status === 'pending' ? 'Pending' : "In progress";

    function cancelOrder() {
        console.log('Canceling order');
        toggleModal();
        // Skicka till databasen
        // Navigera till cancel
    }

    function toggleModal() {
        setOpenModal(!openModal);
    }

    return (
        <main className="confirmation">
            <header>
                <h1>Success</h1>
                <GreenLine />
            </header>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: .3 } }}
                className="confirmation-info"
            >
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
                <section className="order-id">
                    <h4>Order ID</h4>
                    <div>
                        <p>{id}</p>
                        <DetailsButton onClick={() => setShowMore(!showMore)}>
                            {
                                showMore ? 'Show less' : 'Show more'
                            }
                        </DetailsButton>
                    </div>
                    <AnimatePresence>
                        { showMore &&
                            <motion.section
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <section className='details'>
                                    <ul>
                                        {orderItems}
                                    </ul>
                                    <p>{orderStatus}</p>
                                </section>
                            </motion.section>
                        }
                    </AnimatePresence>
                </section>
            </motion.section>

            <Button label={"Go to Home Page"} type={"primary"} onClick={() => navigate('/')} />

            { !isLocked &&
                <section className='cancel-order'>
                    <p>Unexpected change of plans? No problem! You can cancel your order anytime before our chefs hit the kitchen stage.</p>
                    <DetailsButton onClick={toggleModal}>Cancel Order</DetailsButton>
                </section>
            }
            { openModal &&
                <article className='cancel-modal'>
                    <div>
                        <div aria-label='close' onClick={toggleModal}>
                            <i className="fa-solid fa-x"></i>
                        </div>
                        <h2>Canceling You Order? We Understand.</h2>
                        <section>
                            <p>Are you sure you want to cancel your order? If unexpected cravings return, you can always reorder.</p>
                            <p>Do you want to cancel your order?</p>
                        </section>
                        <Button label={"Yes"} type={"primary"} onClick={cancelOrder} />
                        <Button label={"No"} type={"secondary"} onClick={toggleModal} />
                    </div>
                </article>
            }
        </main>

    );
}

export default OrderConfirmation;