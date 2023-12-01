import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute() {
    const navigate = useNavigate();
    const orderItems = useSelector(state => state.order.orderItems);

    if (orderItems.length < 1) {
        console.log('redirect')
    }

    return (
        <Outlet />
    );
}

export default ProtectedRoute;