import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        label: "Home",
        path: "/"
      },
      {
        label: "Sign In",
        path: "/sign-in"
      },
      {
        label: "Menu",
        path: "/menu"
      },
      {
        label: "About Us",
        path: "/about"
      }
];

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {

    }
});

export const {  } = navigationSlice.actions;

export default navigationSlice.reducer;