import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { userActions } from 'store/actions/user.actions'
// import { userActions } from 'store/actions/user.actions'
import { login } from 'store/reducers/auth/thunk'

const Login = () => {
  const store = useSelector((state) => state)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })
  console.log('Sotree in LOGIN', store)
  const handleChange = (e) => {
    setError(false)
    const { name, value } = e.target
    setUserData((userData) => ({ ...userData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      const b = await dispatch(login({ data: userData, mode: 'login' }))
      console.log('after', b)
      console.log('Sotree in LOGIN3333', store)
    } else {
      setError(true)
    }
  }

  const validateForm = () => {
    return userData.email && userData.password
  }
  if (store.auth.error) {
    console.log('greskaaaa', store.auth)
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form" style={{ textAlign: 'center' }}>
      {store.auth.error && <h1>Greska000</h1>}
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
      <button type="submit" className="btn btn-blue">
        SIgn in
      </button>
    </form>
  )
}
export default Login
