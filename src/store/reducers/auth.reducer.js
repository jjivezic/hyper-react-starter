// import { authConstants } from '../constants'

// export const auth = (state = initialState, action) => {
//   switch (action.type) {
//     case authConstants.LOGIN_REQUEST:
//       return {
//         loggingIn: true,
//         user: action.user
//       }
//     case authConstants.LOGIN_SUCCESS:
//       return {
//         loggedIn: true,
//         user: action.user
//       }
//     case authConstants.LOGIN_FAILURE:
//       return {
//         ...state
//       }
//     case authConstants.LOGOUT:
//       return {
//         ...state,
//         user: null
//       }
//     default:
//       return state
//   }
// }

import { createSlice } from '@reduxjs/toolkit'
import { login } from 'store/actions/user.actions'
const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
const initialState = {
  user: initialUser,
  loading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // add your non- async reducers here
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true
      console.log('222222222222', state)
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.user = payload
      console.log('3333333333333333', state, payload)
    },
    [login.rejected]: (state) => {
      state.loading = false
      console.log('444444444444444', state)
    }
  }
})

// export const { loginSuccess, register } = authSlice.actions

export default authSlice.reducer
