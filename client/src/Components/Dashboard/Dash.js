import React, {useContext} from 'react'
import NavBar from '../Hero/NavBar'
import { Riders } from '../Helper/Context';
import Overlay from '../Hero/Overlay'
import Profile from './Profile';
import Display from './Display';
import OverRide from './OverRide';
function Dash() {
  const {setOverlay, overlay, rides} = useContext(Riders)
  

  return (
    <div className='bg-black h-screen overflow-hidden'>
      {overlay?(<Overlay head={'Profile'} see={overlay} setSee={setOverlay}>
          <Profile/>
        </Overlay>):null}

      {rides?(<OverRide/>):null}

      <NavBar name={'Samuel'}/>
      <div className='grid grid-cols-10 md:grid-cols-12 noun px-3'>
        <div className='hidden md:contents'><div></div></div>
        <div className='col-span-10 w-full flex flex-col md:flex-row justify-between'>
          <div className='w-full h-full md:w-11/12 overflow-y-scroll higher'>
            <Display/>
          </div>
          <div className='flex items-end noun pt-1 md:pt-0'>
            <h2 className='nairobi relative'>Nairobi, Kenya</h2>
          </div>
        </div>
        <div className='hidden md:contents'><div></div></div>
      </div>
    </div>
  )
}

export default Dash