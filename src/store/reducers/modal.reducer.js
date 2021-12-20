// import { modalConstants } from '../constants'

// // export const modal = (state = initialState, action) => {
// //   switch (action.type) {
// //     case modalConstants.SHOW_MODAL:
// //       return {
// //         content: action.content,
// //         show: action.show,
// //         name: action.name,
// //         size: action.size
// //       }
// //     case modalConstants.HIDE_MODAL:
// //       return {
// //         ...state,
// //         show: false
// //       }
// //     default:
// //       return state
// //   }
// // }

import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  show: false,
  content: {},
  name: '',
  size: ''
}
export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state, action) => {
      state.content = action.content
      state.show = action.show
      state.name = action.name
      state.size = action.size
    },
    hide: (state) => {
      state.show = false
    }
  }
})

export const { login, register } = modalSlice.actions

export default modalSlice.reducer
