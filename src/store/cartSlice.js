import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state.splice(index, 1);
        }
    }
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;