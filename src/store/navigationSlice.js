import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Sign In",
    path: "/sign-in",
  },
  {
    label: "Menu",
    path: "/menu",
  },
  {
    label: "About Us",
    path: "/about",
  },
];

const updateNavigationForLoggedInUser = (state, action) => {
  const signInIndex = state.findIndex((item) => item.label === "Sign In");
  if (signInIndex !== -1) {
    if (action.payload.isAdmin) {
      state[signInIndex] = { label: "Staff Panel", path: "/staff" };
    } else {
      state[signInIndex] = { label: "My Profile", path: "/my-profile" };
    }
  }
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    updateNavigation: updateNavigationForLoggedInUser,
  },
});

export const { updateNavigation } = navigationSlice.actions;

export default navigationSlice.reducer;
