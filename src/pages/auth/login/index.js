import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount } from 'store/reducers/auth/authSlice'
import { login } from 'store/reducers/auth/thunk'

const Login = () => {
  const store = useSelector(state => state)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })
  console.log('LOGIN PAGE STORE', store)
  const handleChange = e => {
    setError(false)
    const { name, value } = e.target
    setUserData(userData => ({ ...userData, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch(incrementByAmount(5))
    if (validateForm()) {
      const res = await dispatch(login(userData))
      console.log('LOGIN PAGE RESPONSE', res)
    } else {
      setError(true)
    }
  }

  const validateForm = () => {
    return userData.email && userData.password
  }
  if (store.auth.error) {
    console.log('LOGIN GRESKA', store.auth)
  }

  return (
    <form className="auth-form" style={{ textAlign: 'center' }}>
      {store.auth.error && <h1>{store.auth.error.message}</h1>}
      <h6 className="auth-title">Login 222</h6>
      <section>
        <div className="form-group custom-input">
          <input
            id="email"
            className="form-control"
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="email"
          />
        </div>
        <div className="form-group custom-input">
          <input
            id="password"
            className="form-control"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="password"
          />
        </div>
        {error ? (
          <div className="message-alert">
            <p>All fields are required</p>
          </div>
        ) : null}
      </section>
      <button type="submit" className="btn btn-blue" onClick={e => handleSubmit(e)}>
        Submit
      </button>
    </form>
  )
}
export default Login
