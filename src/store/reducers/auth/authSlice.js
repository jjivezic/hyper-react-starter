import { createSlice } from '@reduxjs/toolkit'
// import userService from 'services/user.service'
import { login } from './thunk'
// import { login } from 'store/actions/user.actions'
const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
const initialState = {
  user: initialUser,
  loading: false,
  isModifying: false,
  error: null
}
// export const login = createAsyncThunk('auth/login', async (data) => {
//   console.log('1111111111111111', data)
//   return userService.login(data)
// })

const notSubmitting = (state) => {
  console.log('notSubmitting')
  state.isModifying = false
}
const startSubmitting = (state) => {
  console.log('startSubmitting')
  state.isModifying = true
}
const isFailure = (state) => {
  console.log('isFailure')
  state.isModifying = true
}
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // add your non- async reducers here
    addUser: (state, action) => {
      state.loading = true
      state.user = action.payload
      console.log('slcie add', state, action)
    },
    failUser: (state, action) => {
      state.loading = true
      state.user = null
      state.error = action.payload
      console.log('slcie err', state, action)
    }
  },
  extraReducers: (builder) => {
    // add your async reducers here
    builder.addCase(login.pending, startSubmitting)
    builder.addCase(login.fulfilled, notSubmitting)
    builder.addCase(login.rejected, isFailure)
  }
})

export const { addUser, failUser } = slice.actions
export default slice.reducer
