import React, { useRef } from 'react'

export default function FocusScreen() {

    const onClick = () => {
        const inputRef = useRef()
        //document.querySelector('input').focus();
    }
  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            
            type="text" 
            placeholder='Ingrese su nombre'
            className=" mt-4 flex-1 block w-full min-w-0 px-3 py-2 border  border-gray-300 rounded"
        />

        <button 
            onClick={onClick}
             className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
            set Focus
        </button>
    </>
  )
}
