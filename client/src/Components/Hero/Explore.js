import React from 'react'
import { Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Explore() {
  return (
    <div className='grid grid-cols-10 md:grid-cols-12 nana px-3'>
      <div className='hidden md:contents'><div></div></div>
      <div className='col-span-10 w-full flex flex-col md:flex-row justify-between'>
          <div className='w-full h-full flex items-center md:w-3/5'>
            <div className='rounded-3xl ground w-4/5 md:w-3/5 h-80 p-4 flex flex-col justify-between'>
              <div>
                <p className='font-bold mt-2 text-lg'>Part of modern time.</p>
                <p className='font-bold mt-3 text-3xl'><span className='text-indigo-700'><span className='text-5xl text-indigo-700'>H</span>ire</span> from a,</p>
                <p className='font-bold text-3xl'>wide range of bikes.</p>
                <p className='font-bold mt-5 text-base'>Ride your way to a healthy life</p>
              </div>
              <div>
                <Link to='/dashboard'><Button variant='contained' className='material-button'>EXPLORE MORE <ArrowForwardIcon/></Button></Link>
              </div>
            </div>
          </div>
          <div className='flex items-end noun'>
            <h2 className='nairobi relative'>Nairobi, Kenya</h2>
          </div>
      </div>
      <div className='hidden md:contents'><div></div></div>
    </div>
  )
}

export default Explore