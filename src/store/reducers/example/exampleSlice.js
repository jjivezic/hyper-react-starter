import { createSlice, current } from '@reduxjs/toolkit'
import { incrementByAmount } from '../auth/authSlice'
import { login } from '../auth/thunk'

const exampleSlice = createSlice({
  name: 'test',
  initialState: { name: '', age: 20, userClone: {} },
  reducers: {
    setUserName: (state, action) => {
      state.age = action.payload // mutate the state all you want with immer
    }
  },
  extraReducers: {
    [incrementByAmount]: (state, action) => {
      console.log('example after increment by amount', current(state), action.payload)
      // updating state when metod form other reducer is called
      // when incrementByAmount is called it will also update state here with
      state.age += action.payload
    },
    [login.fulfilled]: (
      state,
      action /* action will be inferred as "any", as the map notation does not contain type information */
    ) => {
      console.log('example after login fulfiled', current(state), action.payload)
      // updating state when metod form other reducer is called
      // when async method login.fulfilled is called it will also update state here with
      state.userClone = action.payload
    }
  }
})

export const { setUserName } = exampleSlice.actions
export default exampleSlice.reducer
