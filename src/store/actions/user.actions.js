import { authConstants } from '../constants'
import UserService from '../../services/user.service'
import { history } from '../../utils'
import { localStorageService } from '../../services/localStorage.service'

const login = (data) => {
  const request = () => {
    return { type: authConstants.LOGIN_REQUEST }
  }
  const success = (user) => {
    return { type: authConstants.LOGIN_SUCCESS, user }
  }
  const failure = (error) => {
    return { type: authConstants.LOGIN_FAILURE, error }
  }

  return (dispatch) => {
    dispatch(request())
    return UserService.login(data).then(
      (user) => {
        if (user) {
          dispatch(success(user))
          localStorageService.set('user', user)
          history.push('/app')
          return user
        }
      },
      (error) => {
        dispatch(failure(error))
      }
    )
  }
}

const logout = () => {
  localStorageService.destroy('user')
  sessionStorage.clear()
  history.push('/')
  return { type: authConstants.LOGOUT }
}

const create = (data) => {
  const request = () => {
    return { type: authConstants.CREATE_USER_REQUEST }
  }
  const success = (user) => {
    return { type: authConstants.CREATE_USER_SUCCESS, user }
  }
  const failure = (error) => {
    return { type: authConstants.CREATE_USER_FAILURE, error }
  }

  return (dispatch) => {
    dispatch(request())
    return UserService.create(data).then(
      (user) => {
        if (user) {
          dispatch(success(user))
          return user
        }
      },
      (error) => {
        dispatch(failure(error))
      }
    )
  }
}

const getAll = (data) => {
  const request = () => {
    return { type: authConstants.GET_ALL_USERS_REQUEST }
  }
  const success = (user) => {
    return { type: authConstants.GET_ALL_USERS_SUCCESS, user }
  }
  const failure = (error) => {
    return { type: authConstants.GET_ALL_USERS_FAILURE, error }
  }

  return (dispatch) => {
    dispatch(request())
    return UserService.getAll(data).then(
      (user) => {
        if (user) {
          dispatch(success(user))
          return user
        }
      },
      (error) => {
        dispatch(failure(error))
      }
    )
  }
}
const getById = (data) => {
  const request = () => {
    return { type: authConstants.GET_BYID_USERS_REQUEST }
  }
  const success = (user) => {
    return { type: authConstants.GET_BYID_USERS_SUCCESS, user }
  }
  const failure = (error) => {
    return { type: authConstants.GET_BYID_USERS_FAILURE, error }
  }

  return (dispatch) => {
    dispatch(request())
    return UserService.get(data).then(
      (user) => {
        if (user) {
          dispatch(success(user))
          return user
        }
      },
      (error) => {
        dispatch(failure(error))
      }
    )
  }
}
const update = (id, data) => {
  const request = () => {
    return { type: authConstants.UPDATE_USER_REQUEST }
  }
  const success = (user) => {
    return { type: authConstants.UPDATE_USER_SUCCESS, user }
  }
  const failure = (error) => {
    return { type: authConstants.UPDATE_USER_FAILURE, error }
  }

  return (dispatch) => {
    dispatch(request())
    return UserService.update(id, data).then(
      (user) => {
        if (user) {
          dispatch(success(user))
          return user
        }
      },
      (error) => {
        dispatch(failure(error))
      }
    )
  }
}
const remove = (data) => {
  const request = () => {
    return { type: authConstants.DELETE_USER_REQUEST }
  }
  const success = (user) => {
    return { type: authConstants.DELETE_USER_SUCCESS, user }
  }
  const failure = (error) => {
    return { type: authConstants.DELETE_USER_FAILURE, error }
  }

  return (dispatch) => {
    dispatch(request())
    return UserService.delete(data).then(
      (user) => {
        if (user) {
          dispatch(success(user))
          return user
        }
      },
      (error) => {
        dispatch(failure(error))
      }
    )
  }
}
export const userActions = {
  login,
  logout,
  getAll,
  getById,
  update,
  create,
  remove
}
