import React from 'react'
import { useCounter } from '../hooks/useCounter'


export default function CounterWhitHooks() {

    const {counter, increment, decrement, reset} = useCounter(10)

  return (
    <>
        <h1>Counter with Hooks: {counter}</h1>

        <button onClick={() =>increment(2) } className='btn-counter'>+1</button>
        <button className='btn-counter'>reset</button>
        <button onClick={()=> decrement(2)} className='btn-counter'>-1</button>
    </>
  )
}
