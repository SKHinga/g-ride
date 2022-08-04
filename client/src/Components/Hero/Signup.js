import React, {useContext} from 'react'
import Button from '@mui/material/Button';
import { Riders } from '../Helper/Context';

function Signup() {
  const {setSign, sign, overlay, setOverlay} = useContext(Riders)

  const handleDisplay = () => {
    setSign(!sign);
    setOverlay(!overlay);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="h-full border-2 rounded-3xl border-dotted border-gray-200 flex justify-center items-center" aria-hidden="true">
      <form onSubmit={handleSubmit} className='flex flex-col justify-around items-center'>
          <input type='text' name='first_name' placeholder='First Name' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1'/>
          <input type='text' name='last_name' placeholder='Last Name' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1 my-3'/>
          <input type='email' name='email' autoComplete='email' placeholder='Email' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1'/>
          <input type='password' name='password' placeholder='Password' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1 my-3'/>
          <input type='password' name='confirm_password' placeholder='Confirm Password' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1'/>
        <div className='flex justify-end my-2 w-full'>
          <Button type='submit' variant="outlined" className='material-button text-end'>Sign Up</Button>
        </div>
        <div className='flex justify-end w-full'>
          <button type='button' onClick={()=>handleDisplay()}><p className='text-sm font-light text-blue-500'>Already have an account?</p></button>
        </div>
      </form>
    </div>
  )
}

export default Signup