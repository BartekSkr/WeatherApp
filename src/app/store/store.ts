import { configureStore } from '@reduxjs/toolkit';
import { dataReducer } from '../reducers/dataReducers';

export const store = configureStore({ reducer: dataReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
