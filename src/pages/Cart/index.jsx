import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice";

function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
}

export default Cart;