import React, {useContext} from 'react'

import { Riders } from '../Helper/Context';

function Display() {

  const {rides, setRides} = useContext(Riders)
  // const [lends, setLends] = useState()

  // useEffect(()=>{
  //   const collect = async() => {
  //     const response = await fetch('/lends');
  //     const bikes = await response.json();
  //     setLends(bikes)
  //   }
  //   collect();
  // }, [])

  // const seen = lends?.map(obj => <img src={obj.image_url} key={obj.id} className='max-w-full max-h-full m-auto block' alt="Profile"/>)



  return (
      <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
        <div onClick={()=>setRides(!rides)} className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
        <img src='https://firebasestorage.googleapis.com/v0/b/upload-files-42f20.appspot.com/o/images%2Frobert-bye-tG36rvCeqng-unsplash.jpg080fc557-c6f3-4c78-8a59-8d02f9e4703a?alt=media&token=cfb26fe9-3e79-44af-9704-6c14a00f229b' className='max-w-full max-h-full m-auto block' alt="Profile"/>
        </div>
        <div onClick={()=>setRides(!rides)} className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
        <img src='https://firebasestorage.googleapis.com/v0/b/upload-files-42f20.appspot.com/o/images%2Frobert-bye-tG36rvCeqng-unsplash.jpg080fc557-c6f3-4c78-8a59-8d02f9e4703a?alt=media&token=cfb26fe9-3e79-44af-9704-6c14a00f229b' className='max-w-full max-h-full m-auto block' alt="Profile"/>
        </div>
        <div onClick={()=>setRides(!rides)} className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
        <img src='https://firebasestorage.googleapis.com/v0/b/upload-files-42f20.appspot.com/o/images%2Frobert-bye-tG36rvCeqng-unsplash.jpg080fc557-c6f3-4c78-8a59-8d02f9e4703a?alt=media&token=cfb26fe9-3e79-44af-9704-6c14a00f229b' className='max-w-full max-h-full m-auto block' alt="Profile"/>
        </div>
        <div onClick={()=>setRides(!rides)} className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
        <img src='https://firebasestorage.googleapis.com/v0/b/upload-files-42f20.appspot.com/o/images%2Frobert-bye-tG36rvCeqng-unsplash.jpg080fc557-c6f3-4c78-8a59-8d02f9e4703a?alt=media&token=cfb26fe9-3e79-44af-9704-6c14a00f229b' className='max-w-full max-h-full m-auto block' alt="Profile"/>
        </div>
        <div onClick={()=>setRides(!rides)} className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
        <img src='https://firebasestorage.googleapis.com/v0/b/upload-files-42f20.appspot.com/o/images%2Frobert-bye-tG36rvCeqng-unsplash.jpg080fc557-c6f3-4c78-8a59-8d02f9e4703a?alt=media&token=cfb26fe9-3e79-44af-9704-6c14a00f229b' className='max-w-full max-h-full m-auto block' alt="Profile"/>
        </div>
        <div onClick={()=>setRides(!rides)} className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
        <img src='https://firebasestorage.googleapis.com/v0/b/upload-files-42f20.appspot.com/o/images%2Frobert-bye-tG36rvCeqng-unsplash.jpg080fc557-c6f3-4c78-8a59-8d02f9e4703a?alt=media&token=cfb26fe9-3e79-44af-9704-6c14a00f229b' className='max-w-full max-h-full m-auto block' alt="Profile"/>
        </div>
        <div onClick={()=>setRides(!rides)} className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
        <img src='https://firebasestorage.googleapis.com/v0/b/upload-files-42f20.appspot.com/o/images%2Frobert-bye-tG36rvCeqng-unsplash.jpg080fc557-c6f3-4c78-8a59-8d02f9e4703a?alt=media&token=cfb26fe9-3e79-44af-9704-6c14a00f229b' className='max-w-full max-h-full m-auto block' alt="Profile"/>
        </div>
        
      </div>
  )
}

export default Display