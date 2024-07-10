import React from 'react'
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom'
import { useState } from 'react';
function Login() {
  let{register,handleSubmit,formState:{errors}}=useForm()
  function handleformSubmit(obj)
  {

  }
  return (
    <div className='card w-50 mx-auto m-5'>
          <form className="login-form card-body" onSubmit={handleSubmit(handleformSubmit)}>
        <h2>Login</h2>
        <div className="form-group" >
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            {...register('email',{required:true})}
          />
           {
                  errors.email?.type==='required'&& <p className='lead text-danger'> enter city</p>
              }
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            {...register('password',{required:true})}
          />
           {
                  errors.password?.type==='required'&& <p className='lead text-danger'> enter city</p>
              }
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <h3>Don't have an account?</h3><Link to='/registration'>Register</Link>
      </form>
    
    </div>
  )
}

export default Login