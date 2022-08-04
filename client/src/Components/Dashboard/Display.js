import React, {useContext} from 'react'
import { Riders } from '../Helper/Context';

function Display() {

  const {rides, setRides} = useContext(Riders)

  return (
      <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
        <div onClick={()=>setRides(!rides)} className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
          <img src="https://images.unsplash.com/photo-1512203492609-972c16baa28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmljeWNsZSUyMHJhY2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='max-w-full max-h-full m-auto block' alt="Profile"/>
        </div>
        <div className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
          <img src="https://images.unsplash.com/photo-1512203492609-972c16baa28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmljeWNsZSUyMHJhY2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='max-w-full max-h-full m-auto block' alt="Profile"/>
        </div>
        <div className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
          <img src="https://images.unsplash.com/photo-1512203492609-972c16baa28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmljeWNsZSUyMHJhY2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='max-w-full max-h-full m-auto block' alt="Profile"/>
        </div>
        <div className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
          <img src="https://images.unsplash.com/photo-1512203492609-972c16baa28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmljeWNsZSUyMHJhY2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='max-w-full max-h-full m-auto block' alt="Profile"/>
        </div>
        <div className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
          <img src="https://images.unsplash.com/photo-1512203492609-972c16baa28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmljeWNsZSUyMHJhY2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='max-w-full max-h-full m-auto block' alt="Profile"/>
        </div>
        <div className='border-solid border-2 border-white/25 h-48 rounded-2xl overflow-hidden mr-1'>
          <img src="https://images.unsplash.com/photo-1512203492609-972c16baa28b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmljeWNsZSUyMHJhY2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className='max-w-full max-h-full m-auto block' alt="Profile"/>
        </div>
      </div>
  )
}

export default Display