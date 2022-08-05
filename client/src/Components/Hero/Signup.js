import React, {useContext, useState} from 'react'
import Button from '@mui/material/Button';
import { Riders } from '../Helper/Context';

function Signup() {
  const {setSign, sign, overlay, setOverlay, setCurrentUser} = useContext(Riders);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [signupData, setSignupData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  }

  const handleDisplay = () => {
    setSign(!sign);
    setOverlay(!overlay);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)
    fetch('/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(signupData)
    })
    .then(res => {
      if(res.ok){
        res.json().then(person => setCurrentUser(person))
      } else {
        res.json().then(e => setError(Object.entries(e.error).flat()))
      }
    })
    setLoading(false);
    setSignupData({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation:""
    })
  }

  return (
    <div className="h-full border-2 rounded-3xl border-dotted border-gray-200 flex justify-center items-center" aria-hidden="true">
      <form onSubmit={handleSubmit} className='flex flex-col justify-around items-center'>
          <input onChange={handleChange} value={signupData.first_name} type='text' name='first_name' placeholder='First Name' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1'/>
          <input onChange={handleChange} value={signupData.last_name} type='text' name='last_name' placeholder='Last Name' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1 my-3'/>
          <input onChange={handleChange} value={signupData.email} type='email' name='email' autoComplete='email' placeholder='Email' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1'/>
          <input onChange={handleChange} value={signupData.password} type='password' name='password' placeholder='Password' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1 my-3'/>
          <input onChange={handleChange} value={signupData.password_confirmation} type='password' name='password_confirmation' placeholder='Confirm Password' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1'/>
          {error?.length > 0 && (
            <ul style={{ color: "red" }}>
              {error.map((error) => (
                <li className='ml-2 text-red-400' key={error}>{error}</li>
              ))}
            </ul>
          )}
        <div className='flex justify-end my-2 w-full'>
          <Button type='submit' variant="outlined" className='material-button text-end'>{loading?'Processing':'Sign Up'}</Button>
        </div>
        <div className='flex justify-end w-full'>
          <button type='button' onClick={()=>handleDisplay()}><p className='text-sm font-light text-blue-500'>Already have an account?</p></button>
        </div>
      </form>
    </div>
  )
}

export default Signup