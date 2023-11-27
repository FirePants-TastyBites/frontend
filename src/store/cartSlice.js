import { createSlice } from "@reduxjs/toolkit";

const initialState = [
            {
            itemName: 'Grilled Chicken',
            id: '78329473829',
            price: 199
        },
        {
            itemName: 'Grilled Tuna',
            id: 'dsawes65',
            price: 199
        },
        {
            itemName: 'Grilled Salmon',
            id: '45645tgreg',
            price: 19
        }
];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const { addItem, removeItem, getTotalPrice } = cartSlice.actions;

export default cartSlice.reducer;