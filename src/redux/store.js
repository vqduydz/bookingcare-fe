import { currentUserReducer, usersReducer } from './slices';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const persistConfig = {
    ...persistCommonConfig,
    key: 'currentUser',
    version: 1,
    whiteList: ['currentUser'],
    blackList: ['users', '_persist'],
};

const Reducers = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, Reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

persistStore({ ...store });

// export const store = configureStore({
//     reducer: {
//         user: usersReducer,
//     },
// });
