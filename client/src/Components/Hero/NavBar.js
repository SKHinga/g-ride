import React from 'react'

function NavBar() {
  return (
    <div className='grid grid-cols-10 md:grid-cols-12'>
      <div className='hidden md:contents'><div></div></div>
      <div className='col-span-10'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-white font-bold text-xl'><span className='text-2xl rotation'>G</span> <span className='trans inline-block'>-RIDE</span></h1>
          </div>
        </div>
      </div>
      <div className='hidden md:contents'><div></div></div>
    </div>
  )
}

export default NavBar