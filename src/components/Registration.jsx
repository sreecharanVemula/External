import React from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom'
function Registration() 
{
  let{register,handleSubmit,formState:{errors}}=useForm()

  function handleformSubmit(obj)
  {
    
  }

  return (
  
        <div className="registration-container card w-50 mx-auto m-5">
      <form className="registration-form card-body"  onSubmit={handleSubmit(handleformSubmit)}>
        <h2>Registration Form</h2>
        <div className="form-group ">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
          
           {...register('firstname',{required:true})}
            
          />
          {
                errors.firstname?.type==='required'&& <p className='lead text-danger'> enter first name </p>
            }
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            {...register('lastname',{required:true})}
            
            
            
            
            />
            {
                  errors.lastname?.type==='required'&& <p className='lead text-danger'> enter last name </p>
              }
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            {...register('email',{required:true})}
           
            
          />
             {
                  errors.email?.type==='required'&& <p className='lead text-danger'> enter email </p>
              }
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            {...register('pno',{required:true})}
        
           
            
          />
             {
                  errors.pno?.type==='required'&& <p className='lead text-danger'> enter phone number</p>
              }
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            {...register('address',{required:true})}
           
            
          />
             {
                  errors.address?.type==='required'&& <p className='lead text-danger'> enter address </p>
              }
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            
            {...register('city',{required:true})}
            
          />
             {
                  errors.city?.type==='required'&& <p className='lead text-danger'> enter city</p>
              }
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            {...register('username',{required:true})}
            
          />
           {
                  errors.username?.type==='required'&& <p className='lead text-danger'> enter username</p>
              }
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            {...register('password',{required:true})}
           
            
          />
           {
                  errors.password?.type==='required'&& <p className='lead text-danger'> enter password</p>
              }
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"            
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <h3>alreadey have an account?</h3><Link to='/login'>LOGIN</Link>
      </form>
    </div>
  )
}

export default Registration