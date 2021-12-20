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
import authReducer from './reducers/auth.reducer'
import modalReducer from './reducers/modal.reducer'
// console.log('reducerrrrrrrrrrr', auth)

export default configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer
  }
})
