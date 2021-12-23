import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth/authSlice'
import modalReducer from './reducers/modal/modalSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer
  }
})
export default store
