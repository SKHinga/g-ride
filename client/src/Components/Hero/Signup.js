import React from 'react'
import Button from '@mui/material/Button';

function Signup() {
  return (
    <div>
      <form onSubmit className='flex flex-col justify-around'>
          <input type='text' name='first_name' placeholder='First Name' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1'/>
          <input type='text' name='last_name' placeholder='Last Name' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1 my-3'/>
          <input type='email' name='email' autoComplete='email' placeholder='Email' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1'/>
          <input type='password' name='password' placeholder='Password' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1 my-3'/>
          <input type='password' name='confirm_password' placeholder='Confirm Password' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1'/>
        <div className='flex justify-end my-2'>
          <Button type='submit' variant="outlined" className='material-button text-end'>Sign Up</Button>
        </div>
        <p className='text-sm font-light text-blue-500 flex justify-end'>Already have an account?</p>
      </form>
    </div>
  )
}

export default Signup