import { createSlice,isAnyOf } from "@reduxjs/toolkit";

const initialState={
    user:{name:null, email:null, id:''},
    token:null,
    isLoading:false,
    error:null,
    isLoggedIn:true,
    isRefreshing:false,
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    extraReducers:builder=>{
        builder
        .addCase()
    }
})