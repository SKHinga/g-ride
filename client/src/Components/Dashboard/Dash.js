import React, {useContext} from 'react'
import NavBar from '../Hero/NavBar'
import { Riders } from '../Helper/Context';
import Overlay from '../Hero/Overlay'
import Profile from './Profile';
function Dash() {
  const {overlay, setOverlay} = useContext(Riders)
  return (
    <div className='bg-black min-h-screen'>
      {overlay?(<Overlay head={'Profile'} see={overlay} setSee={setOverlay}>
          <Profile/>
        </Overlay>):null}
      <NavBar name={'Samuel'}/>
      
    </div>
  )
}

export default Dash