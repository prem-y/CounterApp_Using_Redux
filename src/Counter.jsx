import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterAction';
import "./style.css"
const Counter = () => {
    const counter = useSelector(state => state.counterReducer);
    const dispatch = useDispatch();
  return (
    <div className='container'>
      <h2>Counter</h2>
      <span>{counter.count}</span>
      <br />
      <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  )
}

export default Counter
