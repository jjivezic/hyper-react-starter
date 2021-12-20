// import { authConstants } from '../constants'
// import UserService from '../../services/user.service'
// import { history } from '../../utils'
// import { localStorageService } from '../../services/localStorage.service'

import { createAsyncThunk } from '@reduxjs/toolkit'
import userService from 'services/user.service'

// const login = (data) => {
//   const request = () => { return { type: authConstants.LOGIN_REQUEST } }
//   const success = (user) => { return { type: authConstants.LOGIN_SUCCESS, user } }
//   const failure = (error) => { return { type: authConstants.LOGIN_FAILURE, error } }

//   return dispatch => {
//     dispatch(request())
//     return UserService.login(data)
//       .then(
//         user => {
//           if (user) {
//             dispatch(success(user))
//             localStorageService.set('user', user)
//             history.push('/app')
//             return user
//           }
//         },
//         error => {
//           dispatch(failure(error))
//         }
//       )
//   }
// }

// const logout = () => {
//   localStorageService.destroy('user')
//   sessionStorage.clear()
//   history.push('/')
//   return { type: authConstants.LOGOUT }
// }

// export const userActions = {
//   login,
//   logout
// }

export const login = createAsyncThunk('auth/login', async (data) => {
  console.log('1111111111111111', data)
  return userService.login(data)
})
