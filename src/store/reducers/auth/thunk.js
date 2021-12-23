import { addUser, failUser } from './authSlice'
import { createAsyncThunk } from '@reduxjs/toolkit'
import userService from 'services/user.service'
export const login = createAsyncThunk('auth/login', async (params, thunkAPI) => {
  console.log('1111111Start', params, thunkAPI)
  try {
    const res = await userService.login(params)
    console.log('11111111111111res', res)
    thunkAPI.dispatch(addUser(res))
    return res
  } catch (e) {
    console.log('111111111111erorr', e.response.data.error.message)
    thunkAPI.dispatch(failUser(e.response.data.error.message))
    return thunkAPI.rejectWithValue(e)
  }
})
