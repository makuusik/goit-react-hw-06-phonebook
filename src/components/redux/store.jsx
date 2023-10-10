import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PURGE,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './ContactsSlice';
// import { getDefaultNormalizer } from '@testing-library/react';

const persistConfig = {
  key: 'auth',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PURGE],
      },
    }),
});

export const persistor = persistStore(store);