import React from 'react'
import useCounter from '../hooks/useCounter';
import Counter from '../components/Counter';

export const CounterWithUseCounter = () => {
  const [count, increment, decrement, reset, setValue] = useCounter();
  return (
   <Counter count={count}increment={increment} decrement={decrement} reset={reset} setValue={setValue}></Counter>
  )
}
