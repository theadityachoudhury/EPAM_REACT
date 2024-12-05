import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    isAuth: boolean;
    name: string;
    email: string;
    token: string;
}

const initialState: UserState = {
    isAuth: false,
    name: '',
    email: '',
    token: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<{ name: string; email: string; token: string }>) => {
            state.isAuth = true;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("name", action.payload.name);
            localStorage.setItem("email", action.payload.email);
        },
        logout: (state) => {
            state.isAuth = false;
            state.name = '';
            state.email = '';
            state.token = '';
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            localStorage.removeItem("email");
        },
    },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
