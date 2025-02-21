import {useCounter} from '../hooks/useCounter';
import Small from './Small';

export default function Memorize() {

    const { counter, increment  } = useCounter(10);

  return (
    <>
        <h1 className='mb-2'>Counter: <Small /> </h1>
        <hr />

        <button 
            onClick={ () => increment() }
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            +1 
        </button>
    </>
  )
}
