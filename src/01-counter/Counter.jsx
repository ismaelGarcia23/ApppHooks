import React, { useState } from 'react'


export default function Counter() {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })
    const incrementCounter = (counterName) => {
        setCounter((prevCounters) => ({
          ...prevCounters,
          [counterName]: prevCounters[counterName] + 1, // Solo incrementa el contador seleccionado
        }));
      };


  return (
    <>
    
   <h1>Counter1: {counter.counter1}</h1>
   <h1>Counter2:{counter.counter2} </h1>
   <h1>Counter3: {counter.counter3} </h1>

    <hr />
    <button className='mt-4 py-2 px-5 bg-sky-600 text-white font-semibold rounded shadow-md focus:outline-none ' onClick={() => incrementCounter('counter1')} >+1</button>
    </>
  )
}
