// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
// import { auth } from './reducers/auth.reducer'
// const loggerMiddleware = createLogger()

// const middlewares = [thunkMiddleware]

// if (process.env.REACT_APP_ENVIROMENT !== 'prod') {
//   middlewares.push(loggerMiddleware)
// }

// export const store = createStore(
//   rootReducer,
//   applyMiddleware(...middlewares)
// )

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
