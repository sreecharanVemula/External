import React from 'react'
import {useForm} from 'react-hook-form';
import { useState } from 'react';
function Login() {
    
  return (
    <div>
          <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
        
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    
    </div>
  )
}

export default Login