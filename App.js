import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement} from './action/index'

function App() {

  const counter = useSelector(state => state.counter)
  const islogged = useSelector(state => state.islogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={()=>{
        dispatch(increment(5))
      }}>+</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>-</button>
      {islogged ? <h3>valuable information I shouldn't see</h3> : ''}
    </div>
  );
}

export default App;