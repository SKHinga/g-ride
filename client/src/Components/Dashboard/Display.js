import React, {useContext, useState, useEffect} from 'react'
import { Riders } from '../Helper/Context';

function Display() {

  const {rides, setRides} = useContext(Riders)
  const [leads, setLeads] = useState([])

  useEffect(()=>{
    const collect = async() => {
      const response = await fetch('/leads');
      const bikes = await response.json();
      setLeads(bikes)
    }
    collect();
  }, [])

  const seen = leads?.map(obj => <img src={obj.image_url} key={obj.id} className='max-w-full max-h-full m-auto block' alt="Profile"/>)


  return (
      <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
        <div onClick={()=>setRides(!rides)} className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
         {seen}
        </div>
      </div>
  )
}

export default Display