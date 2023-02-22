import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import * as API from '_/services/api/dataApi';

// get user
export const getUser = createAsyncThunk('getUser', async (params, thunkAPI) => {
    try {
        const res = await API.userApi(params);
        return res;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const createNewUser = createAsyncThunk('createNewUser', async (dataUser, thunkAPI) => {
    try {
        const res = await API.createNewUserApi(dataUser);
        return res;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
export const updateUser = createAsyncThunk('updateUser', async (updateData, thunkAPI) => {
    try {
        const res = await API.updateUserApi(updateData);
        return res;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
export const deleteUser = createAsyncThunk('deleteUser', async (id, thunkAPI) => {
    try {
        const res = await API.deleteUserApi(id);
        return res;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
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

export const login = createAsyncThunk('user/login', async (params, thunkAPI) => {
    try {
        const url = `${process.env.REACT_APP_BACKEND_URL}/login`;
        const response = await axios.post(url, params);
        const res = response.data;
        return res;
    } catch (error) {
        // Xử lý lỗi
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// export const login = createAsyncThunk('user/login', async (thunkAPI) => {
//     try {
//         const response = await API.loginApi();
//         //         return response;
//     } catch (error) {
//         // Xử lý lỗi
//         //         return thunkAPI.rejectWithValue(error);
//     }
// });

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        error: null,
    },
    reducers: {
        logout(state) {
            state.token = null;
            state.error = null;
        },
        loginError(state, action) {
            state.token = null;
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token;
            state.error = null;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.token = null;
            state.error = action.payload.error;
        });
    },
});

export const { logout } = authSlice.actions;
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
