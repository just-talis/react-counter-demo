import React from 'react'
import Counter from '../components/Counter';
import Layout from '../components/Layout';
import useReducerCounter from '../hooks/useReducerCounter';

export const CounterWithUseReducer = () => {
  const [count, increment, decrement, reset, setValue] = useReducerCounter();
  return (
    <Layout>
   <Counter count={count}increment={increment} decrement={decrement} reset={reset} setValue={setValue}></Counter>

    </Layout>
  )
}
