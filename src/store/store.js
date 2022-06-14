import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth/authSlice'
import modalReducer from './reducers/modal/modalSlice'
import logger from 'redux-logger'
import testSlice from './reducers/test/testSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    test: testSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'prod'
})
export default store
