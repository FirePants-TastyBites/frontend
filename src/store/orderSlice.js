import { createSlice, nanoid } from "@reduxjs/toolkit";

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
        removeAll: (state) => {
            console.log(initialState.orderItems);
            state.orderItems = initialState.orderItems;
        },
        setOrder: (state, action) => {
            const timestamp = Date.now();
            const deliveryTime = new Date(timestamp);

            const newOrder = {
                orderId: nanoid(),
                deliveryTime, 
                ...action.payload
            }


            console.log( "New order: ", newOrder)
            state = newOrder;
        },
        resetOrder: () => initialState
    }
});

export const { addItem, removeItem, removeAll, setOrder, resetOrder } = orderSlice.actions;

export default orderSlice.reducer;