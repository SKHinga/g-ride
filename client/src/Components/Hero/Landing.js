import { useState } from "react";
import { Riders } from "../Helper/Context";
import Explore from './Explore'
import NavBar from './NavBar'
import Overlay from "./Overlay";

function Landing() {

  const [overlay, setOverlay] = useState(false)

  return (
    <Riders.Provider value={{setOverlay}}>
      <div className='h-screen w-screen bike bg-cover bg-no-repeat'>
        {overlay?(<Overlay/>):null}
        <NavBar />
        <Explore/>
      </div>
    </Riders.Provider>
  )
}

export default Landing