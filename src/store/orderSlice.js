import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderId: null,
    userId: null,
    totalAmount: 0,
    deliveryTime: null,
    orderItems: [],
    comment: ''
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const index = state.orderItems.findIndex(item => action.payload.id === item.id);

            if (index < 0) {
                state.orderItems.push(action.payload);
            } else {
                const item = state.orderItems[index];

                const update = {
                    ...item,
                    price: item.price + (item.price / item.qty),
                    qty: item.qty += 1,
                };

                state.orderItems.splice(index, 1, update);
            }

        },
        removeItem: (state, action) => {
            const index = state.orderItems.findIndex(item => item.id === action.payload);
            const item = state.orderItems[index];

            if (item.qty > 1) {
                const update = {
                    ...item,
                    price: item.price - (item.price / item.qty),
                    qty: item.qty -= 1
                };

                state.orderItems.splice(index, 1, update);
            } else {
                state.orderItems.splice(index, 1);
            }

        },
        removeAll: () => initialState.orderItems,
        reset: () => initialState
    }
});

export const { addItem, removeItem, removeAll } = orderSlice.actions;

export default orderSlice.reducer;