import React, {useState} from 'react'
import Button from '@mui/material/Button';
import {storage} from '../firebase';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage';
import {v4} from 'uuid'

function Lend() {
  const [image, setImage] = useState(null)
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);

  const uploadImage = () => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    const uploadTask = uploadBytesResumable(imageRef, image)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          setImgUrl(downloadURL);
        });
      }
    );

  }

  const handleGone = e => {
    e.preventDefault();
  
  }

  return (
    <form onSubmit={handleGone} className='admit'>
      {progresspercent > 0 && progresspercent < 100 ? (
          <span className="text-red-600">
            {`Uploading... ${progresspercent}%`}
          </span>
        ) : progresspercent === 100 ? (
          <span className="text-green-600">Upload complete</span>
        ) : null}
      <div className='flex flex-col md:flex-row'>
        <div className='border-solid border-2 border-white/25 rounded-3xl w-58 h-52 overflow-hidden mr-1'>
          <img src={imgUrl} alt="Your Upload Will Appear Here!"/>
        </div>
        <div className='flex border-solid border-2 border-white/50 rounded-lg p-1 mt-2 md:mt-0 md:w-4/6 h-1/2 overflow-x-hidden'>
          <input type='file' onChange={e=>{setImage(e.target.files[0])}} className='rounded-lg'/>
          <Button onClick={()=>uploadImage()} type='button' variant="outlined" className='material-button text-end !rounded-xl !capitalize'>Set</Button> 
        </div>
      </div>
      <div className='mt-3'>
        <input type='text' name='type' placeholder='Type...' className='mr-2 font-normal text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white/50 rounded-xl px-2 py-1'/>
        <input type='number' placeholder='Amount In Ksh.' className='mt-3 mr-2 font-normal text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white/50 rounded-xl px-2 py-1'/>
      </div>
      <div className='mt-3 md:flex'>
        <div className='flex flex-col md:flex-row'>
          <label htmlFor='from'>
            FROM:
            <input type='date' name='from' className='ml-2 font-normal text-white bg-transparent outline-none border-solid border-2 border-white/50 rounded-xl px-2 py-1 my-2 md:mt-0'/>
          </label>
          <label htmlFor='to'>
            TO:
            <input type='date' name='to' className='ml-8 md:ml-2 md:mr-8 font-normal text-white bg-transparent outline-none border-solid border-2 border-white/50 rounded-xl px-2 py-1  mb-2 md:mb-0'/>
          </label>
        </div>
      </div>
      <textarea cols='25' rows='6' name='type' placeholder='Description...' className='mt-2 font-normal text-white placeholder:text-white bg-transparent outline-none border-solid border-2 border-white/50 rounded-xl px-2 py-1'/>
      <div>
        <Button type='submit' variant="outlined" className='material-button text-end !rounded-3xl !capitalize'>Hire Out</Button>
      </div>
    </form>
  )
}

export default Lend