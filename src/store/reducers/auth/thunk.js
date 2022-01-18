import { createAsyncThunk } from '@reduxjs/toolkit'
import userService from 'services/user.service'
export const login = createAsyncThunk('auth/login', async params => {
  return await userService.login(params)
})
