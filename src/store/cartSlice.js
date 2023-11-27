import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // Payload: complete item object
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            // Payload: item id
            const index = state.findIndex(item => item.id === action.payload.id);
            state.splice(index, 1);
        }
    }
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;