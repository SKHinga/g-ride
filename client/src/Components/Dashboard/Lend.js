import React from 'react'
import Button from '@mui/material/Button';

function Lend() {
  return (
    <form className='admit'>
      <div className='flex flex-col md:flex-row'>
        <div className='border-solid border-2 border-white/25 rounded-3xl w-58 h-52 overflow-hidden mr-1'>
          <img src="https://images.unsplash.com/photo-1512203492609-972c16baa28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmljeWNsZSUyMHJhY2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='max-w-full max-h-full m-auto block' alt="Profile"/>
        </div>
        <div className='border-solid border-2 border-white/50 rounded-lg p-1 mt-2 md:mt-0 md:w-4/6 h-1/2 overflow-x-hidden'>
          <input type='file' className='rounded-lg'/>  
        </div>
      </div>
      <div className='mt-3'>
        <input type='text' name='type' placeholder='Type...' className='mr-2 font-normal text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white/50 rounded-xl px-2 py-1'/>
        <input type='number' placeholder='Amount In Ksh.' className='mt-3 mr-2 font-normal text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white/50 rounded-xl px-2 py-1'/>
      </div>
      <div className='mt-3 md:flex'>
        <div className='flex flex-col md:flex-row'>
          <label htmlFor='from'>
            FROM:
            <input type='date' name='from' className='ml-2 font-normal text-white bg-transparent outline-none border-solid border-2 border-white/50 rounded-xl px-2 py-1 my-2 md:mt-0'/>
          </label>
          <label htmlFor='to'>
            TO:
            <input type='date' name='to' className='ml-8 md:ml-2 md:mr-8 font-normal text-white bg-transparent outline-none border-solid border-2 border-white/50 rounded-xl px-2 py-1  mb-2 md:mb-0'/>
          </label>
        </div>
      </div>
      <textarea cols='25' rows='6' name='type' placeholder='Description...' className='mt-2 font-normal text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white/50 rounded-xl px-2 py-1'/>
      <div>
        <Button type='submit' variant="outlined" className='material-button text-end !rounded-3xl !capitalize'>Hire Out</Button>
      </div>
    </form>
  )
}

export default Lend