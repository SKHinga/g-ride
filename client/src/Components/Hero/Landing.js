import React, {useContext} from 'react'
import Explore from './Explore'
import NavBar from './NavBar'
import Overlay from "./Overlay";
import { Riders } from '../Helper/Context';
import Login from './Login';
import Signup from './Signup';

function Landing() {
  const {overlay, setOverlay, setSign, sign} = useContext(Riders)
 
  return (
      <div className='h-screen w-screen bike bg-cover bg-no-repeat'>
        {overlay?(<Overlay head={'Log In'} see={overlay} setSee={setOverlay}>
          <Login/>
        </Overlay>):null}
        {sign?(<Overlay head={'Sign Up'} see={sign} setSee={setSign}>
          <Signup/>
        </Overlay>):null}
        <NavBar/>
        <Explore/>
      </div>
  )
}

export default Landing