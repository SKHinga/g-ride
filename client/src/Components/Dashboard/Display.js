import React, {useState, useEffect, useContext} from 'react'

import { Riders } from '../Helper/Context';

function Display() {

  const {rides, setRides, setSingle} = useContext(Riders)
  const [lends, setLends] = useState()

  useEffect(()=>{
    const collect = async() => {
      const response = await fetch('/lends');
      const bikes = await response.json();
      setLends(bikes)
    }
    collect();
  }, [])


  const handleId = (id) => {
    setRides(!rides)
    setSingle(id);
  }

  const seen = lends?.map(obj => {
    return (
      <div key={obj.id} onClick={()=>handleId(obj.id)} className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
        <img src={obj.image_url} className='max-w-full max-h-full m-auto block' alt="Profile"/>
      </div>
    )
  })



  return (
      <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
        {seen} 
      </div>
  )
}

export default Display