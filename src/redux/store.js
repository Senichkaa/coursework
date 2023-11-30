import { configureStore } from '@reduxjs/toolkit';
import { carsSlice } from './carSlice/slice';
import { cartSlice } from './cartSlice/slice';
import { authReducer } from './authSlice/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cartPersistConfig = {
  key: 'cart',
  storage,
};

const persistConfig = {
  key: 'cars',
  storage,
  whitelist: ['filteredCars', 'filter', 'isFiltered'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(persistConfig, carsSlice.reducer),
    auth: persistReducer(authPersistConfig, authReducer),
    cart: persistReducer(cartPersistConfig, cartSlice.reducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
