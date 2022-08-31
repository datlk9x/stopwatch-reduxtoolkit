import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'

import './App.scss';
import { setH, setM, setS, setMs, start, stop, reset } from './redux/clock.slice'

const App = () => {
  const dispatch = useDispatch()
  const { hours, minutes, seconds, milliseconds, isRunning } = useSelector(state => state.clock)

  const onStart = () => { dispatch(start()) }
  const onStop  = () => { dispatch(stop())  }
  const onReset = () => { dispatch(reset()) }

  useEffect(() => {
    
    let interval = null
    if (isRunning) {
      interval = setInterval(() => {

        if(minutes > 59){
          dispatch(setH(hours + 1))
          dispatch(setM(0))
          clearInterval(interval)
        }

        if(seconds > 59){
          dispatch(setM(minutes + 1))
          dispatch(setS(0))
          clearInterval(interval)
        }
        
        if(milliseconds >= 99){
          dispatch(setS(seconds + 1))
          dispatch(setMs(0))
          clearInterval(interval)
        }

        if(milliseconds < 99){
          dispatch(setMs(milliseconds + 1))
        }

      }, 10)

    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  })

  return (
      <div className="clock">
        <span>{ hours < 10 ? '0' + hours : hours } : { minutes < 10 ? '0' + minutes : minutes} : { seconds < 10 ? '0' + seconds : seconds } : { milliseconds < 10 ? '0' + milliseconds : milliseconds }</span>
        <div className='text-center'>
          <button onClick={onStart} className='btn btn-light m-4'>Start</button>
          <button onClick={onStop} className='btn btn-light m-4'>Stop</button>
          <button onClick={onReset} className='btn btn-light m-4'>Reset</button>
        </div>
      </div>
  );
}

export default App
