import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as API from '_/services/api/dataApi';

// get user
export const getUser = createAsyncThunk('users/getUser', async (params) => {
    try {
        const res = await API.userApi(params);
        return res;
    } catch (error) {
        console.log('failed');
    }
});

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        current: {},
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: {
        [getUser.pending]: (state) => {
            state.loading = true;
        },
        [getUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = '';
            state.current = action.error;
        },
        [getUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.current = action.payload;
        },
    },
});
const { reducer: usersReducer } = usersSlice;
export { usersReducer };

// login

export const login = createAsyncThunk('currentUser/login', async (param) => {
    try {
        const res = await API.login(param);
        console.log({ param: res.data });
        return res.data;
    } catch (error) {
        console.log(error);
    }
});

export const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        isLoggedIn: false,
        userInfo: null,
    },
    reducers: {},
    extraReducers: {
        [login.pending]: (state, action) => {
            state.isLoggedIn = false;
            state.userInfo = null;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.userInfo = null;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.userInfo = action.payload;
            console.log(action.payload);
        },
    },
});
const { reducer: currentUserReducer } = currentUserSlice;
export { currentUserReducer };
//

export function getAllUrlParams() {
    // get query string from url (optional) or window
    var queryString = window.location.pathname;

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {
        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // set parameter name and value (use 'true' if empty)
            var paramName = a[0];
            var paramValue = typeof a[1] === 'undefined' ? true : a[1];

            // (optional) keep case consistent
            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

            // if the paramName ends with square brackets, e.g. colors[] or colors[2]
            if (paramName.match(/\[(\d+)?\]$/)) {
                // create key if it doesn't exist
                var key = paramName.replace(/\[(\d+)?\]/, '');
                if (!obj[key]) obj[key] = [];

                // if it's an indexed array e.g. colors[2]
                if (paramName.match(/\[\d+\]$/)) {
                    // get the index value and add the entry at the appropriate position
                    var index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else {
                    // otherwise add the value to the end of the array
                    obj[key].push(paramValue);
                }
            } else {
                // we're dealing with a string
                if (!obj[paramName]) {
                    // if it doesn't exist, create property
                    obj[paramName] = paramValue;
                } else if (obj[paramName] && typeof obj[paramName] === 'string') {
                    // if property does exist and it's a string, convert it to an array
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                } else {
                    // otherwise add the property
                    obj[paramName].push(paramValue);
                }
            }
        }
    }

    return obj;
}
