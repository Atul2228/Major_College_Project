// import { createRuducer } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: { isAuthenticated: false },
    reducers: {
        LoadUserRequest: (state) => {
            state.loading = true;
        },
        LoadUserSuccees: (state, action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.user = action.payload;
        },
        LoadUserFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        },
        updateUserInfoRequest:(state)=>{
            state.loading=false;
            
        },
        updateUserInfoSuccess:(state,action)=>{
            state.loading=true;
            state.user=action.payload;


        },
        updateUserInfoFailed:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        updateUserAddressRequest: (state) => {
            state.addressloading = true;
          },
          updateUserAddressSuccess: (state, action) => {
            state.addressloading = false;
            state.successMessage = action.payload; 
            // .successMessage;
            state.user = action.payload.user;
          },
          updateUserAddressFailed: (state, action) => {
            state.addressloading = false;
            state.error = action.payload;
          },
        clearErrors: (state) => {
            state.error = null;
        }

    }
})
export const userActions = userSlice.actions;
