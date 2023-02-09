import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '_/services/api/dataApi';

// get user
export const getUser = createAsyncThunk('getUser', async (params) => {
    try {
        const res = await API.userApi(params);
        return res;
    } catch (error) {
        return error.response.data;
    }
});

export const createNewUser = createAsyncThunk('createNewUser', async (dataUser) => {
    try {
        const res = await API.createNewUser(dataUser);
        console.log({ res });
        return res;
    } catch (error) {
        console.log({ error });
        return error.response.data;
    }
});
export const updateUser = createAsyncThunk('updateUser', async (updateData) => {
    try {
        const res = await API.updateUser(updateData);
        return res;
    } catch (error) {
        return error.response.data;
    }
});
export const deleteUser = createAsyncThunk('deleteUser', async (id) => {
    try {
        const res = await API.deleteUser(id);
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
            state.isLogged = true;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.errorMessage = action.payload;
            state.isLogged = false;
        });
    },
});
export const { logout } = userSlice.actions;
const { reducer: authReducer } = userSlice;
export { authReducer };

// Languages

let languageInit = () => {
    if (JSON.parse(localStorage.getItem('persist:root'))) {
        return JSON.parse(localStorage.getItem('persist:root')).language;
    } else return 'vi';
};

export const languageSlice = createSlice({
    name: 'language',
    initialState: { language: languageInit() },
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});
export const { changeLanguage } = languageSlice.actions;
const { reducer: languageReducer } = languageSlice;
export { languageReducer };
