///coleção de lógicas de reducers e actions para o usuário

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: "",
}

export const slive = createSlice({
    name: 'user', ///nome do slice
    initialState,
    reducers: {
        changeUser: (state, { payload }) => {
            state.email = payload;
            // return{ ...state, email: payload }
        }, logout: (state) => {
            return { ...state, email: '' }
        }
    }
});

export const { changeUser, logout } = slive.actions;

export default slive.reducer;

export const selectUser = state => state.user.email;