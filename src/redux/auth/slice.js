import { createSlice,isAnyOf } from "@reduxjs/toolkit";
import {register,
        login,
        logOut,
        getCurrentUser,
        updateUser,getUserInfo,
        deletePet,
        changeUser,
        changeStatus
} from './operations'

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
        .addCase(register.pending,state=>{
            state.isLoading=true;
        })
        .addCase(register.fulfilled,(state,{payload})=>{
            state.user = payload.user;
            state.token = payload.accessToken;
            state.isLoggedIn=true;
            state.isLoading=false;
            state.error = null;
        })
        .addCase(register.rejected,(state,{payload})=>{
            state.isLoading = false;
            state.error = payload;
            state.isLoggedIn = false;
        })
    }
})