import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import GreenLine from "../../components/GreenLine";
import PinkThingy from "../../components/PinkThingy";
import './OrderCancellation.scss';

function OrderCancellation() {
    const navigate = useNavigate();

    return (
        <main className="cancellation">
            <header>
                <h1>CANCELLED</h1>
                <GreenLine />
            </header>
            <p>Your cancellation is confirmed! If cravings kick in again, we're here, ready to delight your taste buds.</p>
            <h2>You're welcome back anytime!</h2>

            <Button label={"Go to Home Page"} type={"primary"} />
            <PinkThingy />
            <img src="https://images.unsplash.com/photo-1645621395040-4c7287b8582e?q=80&w=1863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>If you have any questions, our team at Tasty Bites is here to help! Feel free to reach out to us with any inquiries, and we'll be delighted to assist you on your culinary journey. Your satisfaction is our priority, and we look forward to hearing from you. Contact us at Tasty Bites – where your questions meet our passion for great food!</p>
            <Button label={"Contact Us"} type={"secondary"} onClick={() => navigate('/about')}/>
        </main>
    );
}

export default OrderCancellation;