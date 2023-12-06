import DetailsButton from "../DetailsButton";

function OrderHistoryItem({ order }) {
    const { id, createdAt, cart, totalPrice } = order;
    return (
        <li>
            <div>
                <h4> Order {id}</h4>
                <p>{createdAt.split('T')[0]}</p>
            </div>
            <DetailsButton>View details</DetailsButton>
        </li>
    );
}

export default OrderHistoryItem;