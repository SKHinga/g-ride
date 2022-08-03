import React, {useContext} from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Riders } from '../Helper/Context';

function NavBar(over) {

  const {setOverlay} = useContext(Riders)

  const handleOver = () => {
    setOverlay(over => !over)
  }

  return (
    <div className='grid grid-cols-10 md:grid-cols-12'>
      <div className='hidden md:contents'><div></div></div>
      <div className='col-span-10'>
        <div className='px-3 md:px-0 flex justify-between mt-1'>
          <div>
            <h1 className='font-bold text-xl'><span className='text-2xl rotation inline-block'>G</span> <span className='trans inline-block'>-RIDE</span></h1>
          </div>
          <div>
            <button onClick={()=>handleOver()}><h2 className='font-medium'><PersonIcon/> <span className='inline-block account'>MY ACCOUNT</span></h2></button>
          </div>
        </div>
      </div>
      <div className='hidden md:contents'><div></div></div>
    </div>
  )
}

export default NavBar