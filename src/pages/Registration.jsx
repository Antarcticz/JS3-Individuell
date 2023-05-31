import React, { useState } from 'react'
import '../scssPages/registration.scss'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser, setError } from '../store/features/auth/authSlice'

const Registration = () => {


  const { user, loading, error } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    cPassword: ''
  })


  const handleChange = e => {
    const { id, value } = e.target
    setFormData(data => ({ ...data, [id]: value }))
  }

  const submit = e => {
    e.preventDefault()
    if (formData.password != formData.cPassword) {
      dispatch(setError('Passwords do not match'))
      return
    }

    dispatch(registerUser(formData))
  }

  return (
    <div className='registration-page'>
      <div className="reg-form">
        <form noValidate onSubmit={submit}>
          <p className='registerText'>Please Register Your new Account</p>

          <div className="form-reg-group">
            <label htmlFor="email">E-mail*</label>
            <input type="text" name='email' className="input-full-width" id='email' value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-reg-group">
            <label htmlFor="password">Password*</label>
            <input type="password" name='password' className="input-full-width" id='password' value={formData.password} onChange={handleChange} />
          </div>

          <div className="form-reg-group">
            <label htmlFor="cPassword">Confirm Password*</label>
            <input type="password" name='cPassword' className="input-full-width" id='cPassword' value={formData.cPassword} onChange={handleChange} />
          </div>

          <div className="terms">
            <input type="checkbox" id='check' />
            <label className='terms-label' htmlFor="checkbox">I have read and accepts the terms and agreements</label>
          </div>
          {loading && <p>Loading...</p>}
          {error && <p className='danger'>{error} </p>}
          <button className='submit'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Registration