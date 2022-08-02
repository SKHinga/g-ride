import React from 'react'
import Explore from './Explore'
import NavBar from './NavBar'

function Landing() {
  return (
    <div className='h-screen w-screen bike bg-cover bg-no-repeat'>
      <NavBar/>
      <Explore/>
    </div>
  )
}

export default Landing