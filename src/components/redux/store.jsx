import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contactsSlice';

function serializeRegister(value) {
  return value.toString();
}

function deserializeRegister(value) {
  return value;
}

const persistConfig = {
  key: 'root',
  storage,
  serialize: { register: serializeRegister },
  deserialize: { register: deserializeRegister },
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});

export const persistor = persistStore(store);
