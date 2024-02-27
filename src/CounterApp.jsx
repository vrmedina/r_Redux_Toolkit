import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {
  decrement,
  increment,
  incrementBy,
} from './store/slices/counter';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>El contador esta en: {counter}</h1>
      <div className='card'>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(incrementBy(2));
          }}
        >
          Incrementar En 2
        </button>
        <input type='text' name='incrementBy' placeholder='5' />
      </div>
    </>
  );
}

export default App;