import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './reducers/auth/authSlice'
import modalReducer from './reducers/modal/modalSlice'
import logger from 'redux-logger'
import exampleReducer from './reducers/example/exampleSlice'

const combinedReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  example: exampleReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout') {
    state = undefined
  }
  return combinedReducer(state, action)
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== 'prod'
})

export default store
