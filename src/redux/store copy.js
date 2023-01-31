import { configureStore } from '@reduxjs/toolkit';
import { currentUserReducer, usersReducer } from './slices';

const rootReducer = {
    users: usersReducer,
    currentUser: currentUserReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
