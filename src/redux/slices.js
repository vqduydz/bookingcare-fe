import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '_/services/api/dataApi';

// get user
export const getUser = createAsyncThunk('getUser', async (params) => {
    try {
        const res = await API.userApi(params);
        return res;
    } catch (error) {}
});

export const addNewUser = createAsyncThunk('addNewUser', async (dataUser) => {
    try {
        const res = await API.addNewUser(dataUser);
        return res;
    } catch (error) {}
});
export const updateUser = createAsyncThunk('updateUser', async (updateData) => {
    try {
        const res = await API.updateUser(updateData);
        return res;
    } catch (error) {}
});
export const deleteUser = createAsyncThunk('deleteUser', async (id) => {
    try {
        const res = await API.deleteUser(id);
        return res;
    } catch (error) {}
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
            .addCase('addNewUser', (state, action) => {
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

// login

export const login = createAsyncThunk('user/login', async (param, { rejectWithValue }) => {
    try {
        const res = await (await API.login(param)).data;
        return res.data;
    } catch (error) {
        return error.response.data;
    }
});
export const userSlice = createSlice({
    name: 'user',
    initialState: { currentUser: {} },
    reducers: { logout: () => ({}) },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {});
        builder.addCase(login.fulfilled, (state, action) => {
            state.currentUser = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.errorMessage = action.payload.message;
        });
    },
});

export const { logout } = userSlice.actions;
export const selectUser = (state) => state.currentUser;
export const selectLoading = (state) => state.isLoading;
export const selectErrorMessage = (state) => state.errorMessage;
const { reducer: currentUserReducer } = userSlice;
export { currentUserReducer };
