import React, {useState, useContext} from 'react'
import { Navigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Riders } from '../Helper/Context';

function Login() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const {setSign, sign, overlay, setOverlay, setCurrentUser, currentUser} = useContext(Riders)

  const [logData, setLogData] = useState({
    email: "",
    password: ""
  })

  const handleDisplay = () => {
    setSign(!sign);
    setOverlay(!overlay);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogData({
      ...logData,
      [name]: value,
    });
  }
 

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch('/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(logData)
    })
    .then(res => {
      if(res.ok){
        res.json().then(person => setCurrentUser(person))
      } else {
        res.json().then(e => setError(Object.entries(e.error).flat()))
      }
    })
    // setLoading(false);
    setOverlay(!overlay);
  }

  if(currentUser) return <Navigate to="dashboard" replace={true} />;

  return (
    <div className="h-full border-2 rounded-3xl border-dotted border-gray-200 flex justify-center items-center" aria-hidden="true">
      <form onSubmit={handleSubmit} className='flex flex-col justify-around'>
        <div>
          <input value={logData.email} onChange={handleChange} type='email' name='email' autoComplete='email' placeholder='Email' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1'/>
          <p className='text-sm font-light text-blue-500 flex justify-end my-2'>Forgot password?</p>
          <input value={logData.password} onChange={handleChange} type='password' name='password' autoComplete='current-password' placeholder='Password' className='font-medium text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white rounded-xl px-2 py-1'/>
        </div>
        {error ? <p className="orange">{error}</p> : null}
        <div className='flex justify-end my-2'>
          <Button type='submit' variant="outlined" className='material-button text-end'>{loading ? "Processing..." : "LogIn"}</Button>
        </div>
        <button type='button' onClick={()=>handleDisplay()}><p className='text-sm font-light text-blue-500 flex justify-end'>Sign Up for G-RIde?</p></button>
      </form>
    </div>
  )
}

export default Login