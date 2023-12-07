import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    userId: '',
    totalPrice: 0,
    deliveryTime: '',
    cart: [],
    comment: ''
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const index = state.cart.findIndex(item => action.payload.id === item.id);
            
            if (index < 0) {
                state.cart.push({...action.payload, qty: 1});
            } else {
                const item = state.cart[index];
                const update = {
                    ...item,
                    price: item.price + (item.price / item.qty),
                    qty: item.qty += 1,
                };

                state.cart.splice(index, 1, update);
            }
        },
        removeItem: (state, action) => {
            const index = state.cart.findIndex(item => action.payload === item.id);
            const item = state.cart[index];
            
            if (item.qty > 1) {
                const update = {
                    ...item,
                    price: item.price - (item.price / item.qty),
                    qty: item.qty -= 1
                };

                state.cart.splice(index, 1, update);
            } else {
                state.cart.splice(index, 1);
            }
        },
        setOrder: (state, action) => {
            return action.payload;
        },
        updateUserId: (state, action) => {
            state.userId = action.payload
        },
        resetOrder: () => initialState
    }
});

export const { addItem, removeItem, setOrder, resetOrder, updateUserId } = orderSlice.actions;

export default orderSlice.reducer;