import { createSlice } from '@reduxjs/toolkit'
import { login } from './thunk'

const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
const initialState = {
  user: initialUser,
  loading: false,
  isModifying: false,
  error: null
}
const notSubmitting = state => {
  console.log('notSubmitting')
  state.isModifying = false
}
const startSubmitting = state => {
  console.log('startSubmitting')
  state.isModifying = true
}
const isFailure = state => {
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
  extraReducers: builder => {
    // add your async reducers here
    builder.addCase(login.pending, startSubmitting)
    builder.addCase(login.fulfilled, notSubmitting)
    builder.addCase(login.rejected, isFailure)
  }
})

export const { addUser, failUser } = slice.actions
export default slice.reducer
