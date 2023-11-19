import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carSlice/slice';
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

const persistConfig = {
  key: 'cars',
  storage,
  whitelist: ['cars'],
};

const persistedCarReducer = persistReducer(persistConfig, carsReducer);

export const store = configureStore({
  reducer: {
    cars: persistedCarReducer,
  },
  middleware: {
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  },
});

export const persistor = persistStore(store);
