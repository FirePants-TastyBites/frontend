import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderId: '',
    userId: '',
    totalAmount: 0,
    deliveryTime: '',
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
                state.orderItems.push({...action.payload, qty: 1});
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
            const index = state.orderItems.findIndex(item => action.payload === item.id);
            
            if (item.qty > 1) {
                const item = state.orderItems[index];
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
        setOrder: (state, action) => {
            return action.payload;
        },
        resetOrder: () => initialState
    }
});

export const { addItem, removeItem, setOrder, resetOrder } = orderSlice.actions;

export default orderSlice.reducer;