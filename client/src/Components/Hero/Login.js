import React, {useState} from 'react'
import Button from '@mui/material/Button';

function Login() {

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(!loading);
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col justify-around'>
        <div>
          <input type='email' name='email' autoComplete='email' placeholder='Email' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1'/>
          <p className='text-sm font-light text-blue-500 flex justify-end my-2'>Forgot password?</p>
          <input type='password' name='password' autoComplete='current-password' placeholder='Password' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1'/>
        </div>
        <div className='flex justify-end my-2'>
          <Button type='submit' variant="outlined" className='material-button text-end'>{loading ? "Processing..." : "LogIn"}</Button>
        </div>
        <p className='text-sm font-light text-blue-500 flex justify-end'>Sign Up for G-RIde?</p>
      </form>
    </div>
  )
}

export default Login