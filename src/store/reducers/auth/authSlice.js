import { createSlice, current } from '@reduxjs/toolkit'
import { localStorageService } from 'services/localStorage.service'
import { login, register } from './thunk'

const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
const initialState = {
  user: initialUser,
  error: null,
  value: 0
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // add your non- async reducers here
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
    logout(state) {
      state.user = null
      localStorageService.destroy('user')
    }
  },
  extraReducers: builder => {
    // add your async reducers here

    // Login
    builder.addCase(login.fulfilled, (state, action) => {
      // Immer return state in Proxies form to read curent state you need use current form( @reduxjs/toolkit)
      console.log('auth login extraReducers success', current(state), action.payload)
      localStorageService.set('user', action.payload)
      state.user = action.payload
      state.error = null
    })
    builder.addCase(login.rejected, (state, action) => {
      console.log('auth login extraReducers error', action)
      state.error = action.error
    })

    // Register
    builder.addCase(register.fulfilled, (state, action) => {
      console.log('auth register extraReducers success', current(state), action.payload)
      state.user = action.payload
      state.error = null
    })
  }
})

export const { logout, increment, decrement, incrementByAmount } = authSlice.actions
export default authSlice.reducer
