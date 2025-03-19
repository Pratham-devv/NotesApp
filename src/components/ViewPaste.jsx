import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {

  const {id}= useParams();

  const allPastes = useSelector((state)=>state.paste.pastes)

  const paste = allPastes.filter((p)=>p._id === id)[0];
  return (
    <div className='flex flex-col gap-2 w-screen items-center justify-center'>
      <div className='w-full flex justify-center'>
        <input className='w-3/4  bg-gray-800 text-gray-300 placeholder-gray-400 text-2xl rounded-2xl' type="text" 
        value={paste.title}
        disabled/>
        
        
      </div>
      <div className='w-full flex justify-center' >
        <textarea
        className='text-xl w-3/4 rounded-2xl bg-slate-800 text-gray-300 placeholder-gray-400 border-gray-700'
        value={paste.content}
        rows={10}
        disabled

        
        
        ></textarea>
      </div>
    </div>
  )
}

export default ViewPaste
