import { authConstants } from '../constants'
const user = JSON.parse(localStorage.getItem('user'))
const initialUser = user || null
const initialState = {
  user: initialUser,
  users: []
}
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      }
    case authConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      }
    case authConstants.LOGIN_FAILURE:
      return {
        ...state
      }
    case authConstants.LOGOUT:
      return {
        ...state,
        user: null
      }
    case authConstants.CREATE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.user]
      }
    default:
      return state
  }
}
