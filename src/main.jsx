import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import HooksApp from './HooksApp'
//import Counter from './01-counter/Counter'
//import CounterWhitHooks from './01-counter/CounterWhitHooks'
//import SimpleForm from './02-useEfect/SimpleForm'
//import FormWithCustomHooks from './02-useEfect/FormWithCustomHooks'
//import MultiplesCustomHooks from './03-examples/MultiplesCustomHooks'
import FocusScreen from './04-useRef/FocusScreen'

createRoot(document.getElementById('root')).render(
  
  //<FormWithCustomHooks />
  //<MultiplesCustomHooks />
  <FocusScreen />
  
)
