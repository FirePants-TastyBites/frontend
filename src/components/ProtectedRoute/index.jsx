import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function ProtectedRoute() {
    const navigate = useNavigate();
    const state = useLocation();
    const { pathname } = useLocation();
    console.log("pathname", pathname);
    console.log("state  ", state);
    // Man ska inte kunna navigera till checkout om inte state: { canCheckout: true } finns
    // Man ska inte kunna navigera till OrderConfirmation om inte state: { canConfirm: true } finns
    // Man ska inte kunna navigera till OrderConfirmation om inte state: { canCancel: true } finns

    return (
        <Outlet />
    );
}

export default ProtectedRoute;