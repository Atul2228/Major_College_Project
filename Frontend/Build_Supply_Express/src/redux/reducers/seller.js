// import { createRuducer } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";

export const sellerSlice = createSlice({
    name: 'seller',
    initialState: { isLoading: true },
    reducers: {
        LoadSellerRequest: (state) => {
            state.isLoading = true;
        },
        LoadSellerSuccees: (state, action) => {
            state.isSeller = true;
            state.isLoading = false;
            state.seller = action.payload;
        },
        LoadSellerFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isSeller = false;
        },
        clearErrors: (state) => {
            state.error = null;
        }

    }
})
export const sellerActions = sellerSlice.actions;
