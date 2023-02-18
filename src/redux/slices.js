import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '_/services/api/dataApi';

// get user
export const getUser = createAsyncThunk('getUser', async (params) => {
    try {
        const res = await API.userApi(params);
        console.log(res);
        return res;
    } catch (error) {
        return error.response.data;
    }
});

export const createNewUser = createAsyncThunk('createNewUser', async (dataUser) => {
    try {
        const res = await API.createNewUserApi(dataUser);
        console.log({ res });
        return res;
    } catch (error) {
        console.log({ error });
        return error;
    }
});
export const updateUser = createAsyncThunk('updateUser', async (updateData) => {
    try {
        const res = await API.updateUserApi(updateData);
        return res;
    } catch (error) {
        return error.response.data;
    }
});
export const deleteUser = createAsyncThunk('deleteUser', async (id) => {
    try {
        const res = await API.deleteUserApi(id);
        return res;
    } catch (error) {
        return error.response.data;
    }
});

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        user: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase('getUser', (state, action) => {
                return (state.user = action.payload.data);
            })
            .addCase('createNewUser', (state, action) => {
                return (state.user = action.payload);
            })
            .addCase('updateUser', (state, action) => {
                return (state.user = action.payload);
            })
            .addCase('deleteUser', (state, action) => {
                return (state.user = action.payload);
            });
    },
});
const { reducer: usersReducer } = usersSlice;
export { usersReducer };

// auth

export const getToken = createAsyncThunk('user/getToken', async (params, thunkAPI) => {
    try {
        const response = await API.getTokenLoginApi(params);
        const { token } = response;
        console.log(response);
        return token;
    } catch (error) {
        // Xử lý lỗi
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        isAuthenticated: false,
        error: null,
    },
    reducers: {
        login(state, action) {
            console.log(action);
            state.token = action.payload;
            state.isAuthenticated = true;
            state.error = null;
        },
        logout(state) {
            state.token = null;
            state.isAuthenticated = false;
            state.error = null;
        },
        loginError(state, action) {
            state.error = action.payload.errorMessage;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getToken.fulfilled, (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
            state.error = null;
        });
        builder.addCase(getToken.rejected, (state, action) => {
            console.log(action);
            state.token = null;
            state.isAuthenticated = false;
            state.error = action.payload.errorMessage;
        });
    },
});

export const { login, logout } = authSlice.actions;
const { reducer: authReducer } = authSlice;
export { authReducer };

// Languages

export const languageSlice = createSlice({
    name: 'language',
    initialState: { language: 'vi' },
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});
export const { changeLanguage } = languageSlice.actions;
const { reducer: languageReducer } = languageSlice;
export { languageReducer };
