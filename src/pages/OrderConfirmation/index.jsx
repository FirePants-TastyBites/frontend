import PinkThingy from '../../components/PinkThingy';
import GreenLine from '../../components/GreenLine';
import Button from '../../components/Button';
import DetailsButton from '../../components/DetailsButton';
import './OrderConfirmation.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';

function OrderConfirmation() {
    const [showMore, setShowMore] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [order, setOrder] = useState({
        id: '',
        isLocked: false,
        deliveryTime: null,
        orderStatus: null,
        cart: [],
        createdAt: null
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/order/${id}`)
            .then(response => {
                setOrder(response.data.order);
                calcDeliveryTime();
            })
            .catch(error => console.log(error))

    }, [])

    useEffect(() => {
        let timeoutId;
        let minutes = 5;

        function calcDeliveryTimeWithInterval() {

            axios.get(`https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/order/${id}`)
            .then(response => {
                const orderFromDB = response.data.order;
                if (!orderFromDB.isLocked && minutes > 0) {
                    calcDeliveryTime();
                    timeoutId = setTimeout(calcDeliveryTimeWithInterval, 10000);
                    minutes--;
                } else {
                    setOrder(prevOrder => ({...prevOrder, isLocked: true, orderStatus: 'In progress', deliveryTime: orderFromDB.deliveryTime || order.deliveryTime }));
                }
            })
            .catch(error => console.log(error))
        }

        calcDeliveryTimeWithInterval();

        return () => {
            clearTimeout(timeoutId);
        }

    }, [])

    function calcDeliveryTime() {
        const timestamp = Date.now() + 25 * 60 * 1000;
        const estimatedTime = new Date(timestamp).toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit"
          });

        setOrder(prevOrder => ({ ...prevOrder, deliveryTime: estimatedTime }));
    }

    function cancelOrder() {
        toggleModal();

        axios.put('https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/order', {
            id: order.id,
            orderStatus: 'cancelled',
            deliveryTime: null
        })
            .then(() => {
                navigate('/cancel-order');
            })
            .catch(error => {
                console.error(error);
                navigate('/error');
            })
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
                    <figure>
                        <motion.svg
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1, transition: { delay: .5, duration: .6, type: "spring", stiffness: 150 } }}
                            xmlns="http://www.w3.org/20:00/svg" width="448" height="448" viewBox="0 0 448 448" fill="none"
                        >
                            <path d="M320.215 169.064C322.001 167.157 323.433 164.858 324.427 162.303C325.42 159.748 325.954 156.99 325.997 154.194C326.04 151.397 325.591 148.62 324.677 146.026C323.763 143.433 322.402 141.077 320.676 139.1C318.95 137.122 316.894 135.563 314.631 134.515C312.368 133.468 309.943 132.954 307.503 133.003C305.062 133.052 302.655 133.664 300.426 134.803C298.196 135.941 296.19 137.582 294.525 139.628L186.194 263.756L150.568 222.936C147.122 219.257 142.565 217.254 137.856 217.349C133.147 217.444 128.654 219.63 125.324 223.446C121.994 227.262 120.086 232.41 120.003 237.805C119.92 243.201 121.668 248.423 124.878 252.371L173.349 307.909C176.757 311.809 181.377 314 186.194 314C191.01 314 195.63 311.809 199.038 307.909L320.215 169.064Z" fill="#03A864" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M223.511 0C100.07 0 0.00012207 100.07 0.00012207 223.51C0.00012207 346.951 100.07 447.021 223.511 447.021C346.951 447.021 447.021 346.951 447.021 223.51C447.021 100.07 346.951 0 223.511 0ZM31.1876 223.51C31.1876 172.503 51.4502 123.585 87.5177 87.5176C123.585 51.45 172.503 31.1875 223.511 31.1875C274.518 31.1875 323.436 51.45 359.503 87.5176C395.571 123.585 415.833 172.503 415.833 223.51C415.833 274.518 395.571 323.436 359.503 359.503C323.436 395.571 274.518 415.833 223.511 415.833C172.503 415.833 123.585 395.571 87.5177 359.503C51.4502 323.436 31.1876 274.518 31.1876 223.51Z" fill="#03A864" />
                        </motion.svg>
                    </figure>
                </section>
                <section className="time">
                    <h4>Estimated Delivery Time</h4>
                    <div>
                        <p>{order.deliveryTime}</p>
                    </div>
                </section>
                <section className="order-id">
                    <h4>Order ID</h4>
                    <div>
                        <p>#{order.id.slice(0,6).toUpperCase()}</p>
                        <DetailsButton onClick={() => setShowMore(!showMore)}>
                            {
                                showMore ? 'Show less' : 'Show more'
                            }
                        </DetailsButton>
                    </div>
                    <AnimatePresence>
                        {showMore &&
                            <motion.section
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <section className='details'>
                                    <ul>
                                        {order.cart.map((item, i) => <li key={i}><p>{item.qty} {item.title}</p></li>)}
                                    </ul>
                                    <p>{order.orderStatus}</p>
                                </section>
                            </motion.section>
                        }
                    </AnimatePresence>
                </section>
            </motion.section>

            {!order.isLocked &&
                <>
                    <section className='cancel-order'>
                        <h2>Unexpected change of plans?</h2>
                        <p>No problem! You can cancel your order anytime before our chefs hit the kitchen stage.</p>
                        <DetailsButton onClick={toggleModal}>Cancel Order</DetailsButton>
                    </section>
                    <div className='svg-container'>
                        <PinkThingy />
                    </div>
                </>
            }

            <Button label={"Go to Home Page"} type={"primary"} onClick={() => navigate('/')} />

            {openModal &&
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