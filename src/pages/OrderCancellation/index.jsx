import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import GreenLine from "../../components/GreenLine";
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

            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="602" height="553" viewBox="0 0 602 553" fill="none">
                    <path d="M304.008 468.046L301 471.054L297.691 468.046C154.795 338.387 60.3334 252.649 60.3334 165.708C60.3334 105.542 105.458 60.4167 165.625 60.4167C211.953 60.4167 257.078 90.5 273.023 131.413H328.978C344.922 90.5 390.047 60.4167 436.375 60.4167C496.542 60.4167 541.667 105.542 541.667 165.708C541.667 252.649 447.205 338.387 304.008 468.046ZM436.375 0.25C384.03 0.25 333.791 24.6175 301 62.8233C268.209 24.6175 217.97 0.25 165.625 0.25C72.9684 0.25 0.166748 72.7508 0.166748 165.708C0.166748 279.123 102.45 372.08 257.379 512.569L301 552.279L344.621 512.569C499.55 372.08 601.833 279.123 601.833 165.708C601.833 72.7508 529.032 0.25 436.375 0.25Z" fill="#03A864" />
                </svg>
            </figure>
            <h2>You're welcome back anytime!</h2>
            <p>If you have any questions, our team at Tasty Bites is here to help! Feel free to reach out to us with any inquiries, and we'll be delighted to assist you on your culinary journey. Your satisfaction is our priority, and we look forward to hearing from you. Contact us at Tasty Bites – where your questions meet our passion for great food!</p>

            <img src="https://images.unsplash.com/photo-1645621395040-4c7287b8582e?q=80&w=1863&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <Button label={"Contact Us"} type={"secondary"} onClick={() => navigate('/about')} />
        </main>
    );
}

export default OrderCancellation;