import { createAsyncThunk } from '@reduxjs/toolkit'
import userService from 'services/user.service'

export const login = createAsyncThunk('auth/login', async params => {
  return await userService.login(params)
})
export const register = createAsyncThunk('auth/register', async params => {
  return await userService.register(params)
})

