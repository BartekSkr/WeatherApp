import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { dataReducer } from '../reducers/dataReducers'

export const store = createStore(dataReducer, composeWithDevTools())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>