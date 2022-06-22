import { createSlice, current } from '@reduxjs/toolkit'
import { localStorageService } from 'services/localStorage.service'
import { login, register } from './thunk'
const dummyData = [
  {
    id: 1, name: 'John'
  },
  {
    id: 2, name: 'Jane'
  },
  {
    id: 3, name: 'Bil'
  }
]

const initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
const initialState = {
  user: initialUser,
  error: null,
  value: 0,
  status: 'idle', // 'pending' | 'loading' | 'success' | 'failed'
  dummyData
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
    builder.addCase(login.pending, state => {
      state.status = 'pending'
    })

    builder.addCase(login.fulfilled, (state, action) => {
      // Immer return state in Proxies form to read curent state you need use current form( @reduxjs/toolkit)
      console.log('auth login extraReducers success', current(state), action.payload)
      localStorageService.set('user', action.payload)
      state.user = action.payload
      state.error = null
      state.status = 'success'
    })
    builder.addCase(login.rejected, (state, action) => {
      console.log('auth login extraReducers error', action)
      state.error = action.error.message
      state.status = 'failed'
    })

    // Register
    builder.addCase(register.fulfilled, (state, action) => {
      console.log('auth register extraReducers success', current(state), action.payload)
      state.user = action.payload
      state.error = null
    })
  }
})

// simplify  for use in components
// const user = useSelector(getUser)
// const userStatus = useSelector(getUserStatus)
// const getOneDummy = useSelector(state => getOneDummyData(state,2))

export const getUser = state => state.auth.user
export const getUserError = state => state.auth.error
export const getUserStatus = state => state.auth.status
export const getOneDummyData = (state, id) => state.auth.dummyData.find(e => e.id === id)


export const { logout, increment, decrement, incrementByAmount } = authSlice.actions
export default authSlice.reducer
