import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
    register,
    login,
    logOut,
    getCurrentUser,
    updateUser, getUserInfo,
    deletePet,
    changeUser,
    changeStatus
} from './operations'

const initialState = {
    user: { name: null, email: null, id: '' },
    token: null,
    isLoading: false,
    error: null,
    isLoggedIn: true,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, { payload }) => {

                state.token = payload.accessToken;
            })


            .addCase(login.fulfilled, (state, { payload }) => {

                state.token = payload.accessToken;
                state.isLoggedIn = true;
            })


            .addCase(logOut.fulfilled, (state, { payload }) => {
                state.user = {
                    name: null,
                    email: null,
                };
                state.token = null;
                state.isLoggedIn = false;
                state.isRefreshing = false;
                localStorage.removeItem('refreshToken');


            })

            .addCase(getCurrentUser.pending, state => {
                state.isRefreshing = true;

            })
            .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
                state.user = payload.data;
                state.token = payload.token;
                state.isRefreshing = false;



            })
            .addCase(getCurrentUser.rejected, (state, { payload }) => {
                state.isRefreshing = false;
                state.token = null;


            })

            .addCase(updateUser.fulfilled, (state, { payload }) => {
                state.user = payload;
            })

            .addCase(deletePet.fulfilled, (state, { payload }) => {
                const index = state.user.pet.findIndex(pet => pet._id === payload.id);
                state.user.pet.splice(index, 1);

            })

            .addMatcher(
                isAnyOf(register.pending,
                    login.pending,
                    logOut.pending,
                    getCurrentUser,
                    updateUser.pending,
                    getUserInfo.pending,
                    deletePet.pending,
                    changeUser.pending,
                    changeStatus.pending,
                ),
                state => { state.isLoading = true; }
            )
            .addMatcher(
                isAnyOf(register.fulfilled,
                    login.fulfilled,
                    getUserInfo.fulfilled,
                    changeUser.fulfilled,
                    changeStatus.fulfilled,

                ),
                (state, { payload }) => {
                    state.user = payload.user;
                }
            )
            .addMatcher(
                isAnyOf(register.fulfilled,
                    getCurrentUser.fulfilled,
                ),
                (state, { payload }) => {
                    state.isLoggedIn = true;
                }
            )
            .addMatcher(
                isAnyOf(register.fulfilled,
                    login.fulfilled,
                    logOut.fulfilled,
                    getCurrentUser.fulfilled,
                    updateUser.fulfilled,
                    getUserInfo.fulfilled,
                    deletePet.fulfilled,
                    changeUser.fulfilled,
                    changeStatus.fulfilled,
                ),
                state => {
                    state.isLoading = false;
                    state.error = null;
                }
            )
            .addMatcher(
                isAnyOf(
                    register.rejected,
                    login.rejected,
                    logOut.rejected,
                    getCurrentUser.rejected,
                    updateUser.rejected,
                    getUserInfo.rejected,
                    deletePet.rejected,
                    changeUser.rejected,
                    changeStatus.rejected,
                ),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                }
            )
            .addMatcher(
                isAnyOf(
                    register.rejected,
                    login.rejected,
                    getCurrentUser.rejected,
                ),
                state => {
                    state.isLoggedIn = false;
                }
            )
    }
})

export const authReducer = authSlice.reducer;