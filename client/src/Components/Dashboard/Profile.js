import React from 'react'
import Button from '@mui/material/Button';

function Profile() {
  return (
    <div className="h-full border-2 rounded-3xl border-dotted border-gray-200 p-2 overflow-hidden flex flex-col justify-between" aria-hidden="true">
      <div>
        <div className='flex flex-col md:flex-row'>
          <div className='border-solid border-2 border-white/25 rounded-full w-32 h-32 overflow-hidden mr-1'>
            <img src="https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBwZXJzb258ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Profile"/>
          </div>
          <form className='border-solid border-2 border-white/25 rounded-lg p-1 mt-2 md:mt-0 md:w-4/6 h-1/2 overflow-x-hidden'>
            <input type='file' className='rounded-lg'/>
            <div className='flex justify-end mt-1'>
              <Button type='button' variant="outlined" className='material-button text-end !rounded-3xl !capitalize'>Save</Button>
            </div>
          </form>
        </div>
        <h3 className='font-bold text-lg mt-2'>Name:</h3>
        <p className='italic'>Samuel Hinga</p>
        <h3 className='font-bold text-lg mt-2'>Email:</h3>
        <p className='italic'>samuelkinuthia700@gmail.com</p>
        <h3 className='font-bold text-lg mt-2'>Current Deadline:</h3>
        <p className='italic text-emerald-100'>30-7-2021</p>
        <div className='flex justify-around mt-3'>
          <Button type='button' variant="outlined" className='material-button text-end !rounded-3xl !capitalize'>My hires</Button>
          <Button type='button' variant="outlined" className='material-button text-end !rounded-3xl !capitalize'>Hire out</Button>
        </div>
      </div>
      <div className='mt-4 flex align-end justify-end'>
        <Button type='button' variant="outlined" className='material-button text-end !rounded-3xl !capitalize'>Log Out</Button>
      </div>
    </div>
  )
}

export default Profile