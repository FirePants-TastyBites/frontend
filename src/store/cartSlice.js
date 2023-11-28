import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const index = state.findIndex(item => action.payload.id === item.id);

            if (index < 0) {
                state.push(action.payload);
            } else {
                const item = state[index];

                const update = {
                    ...item,
                    qty: item.qty += 1,
                    price: action.payload.price * item.qty
                };

                state.splice(index, 1, update);
            }

        },
        removeItem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            const item = state[index];

            if (item.qty > 1) {
                const update = {
                    ...item,
                    price: item.price - (item.price / item.qty),
                    qty: item.qty -= 1
                };

                state.splice(index, 1, update);
            } else {
                state.splice(index, 1);
            }

        }
    }
});

export const { addItem, removeItem, getTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;