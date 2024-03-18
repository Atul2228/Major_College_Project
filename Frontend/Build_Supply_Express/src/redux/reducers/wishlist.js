// import { createRuducer } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {wishlist :localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")):[]  },
    reducers: {
        addToWishlist: (state, action) => {
            const item = action.payload;
            const isItemExist = state.wishlist.find((i) => i._id === item._id);
            if (isItemExist) {
              return {
                ...state,
                wishlist: state.wishlist.map((i) => (i._id === isItemExist._id ? item : i)),
              };
            } else {
              return {
                ...state,
               wishlist: [...state.wishlist, item],
              };
            }
          },
        
          removeFromWishlist: (state, action) => {
            return {
              ...state,
              wishlist: state.wishlist.filter((i) => i._id !== action.payload),
            };
          },
    }
})
export const wishlistActions = wishlistSlice.actions;
