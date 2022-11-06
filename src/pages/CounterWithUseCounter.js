import React from 'react'
import useCounter from '../hooks/useCounter';
import Counter from '../components/Counter';
import Layout from '../components/Layout';

export const CounterWithUseCounter = () => {
  const [count, increment, decrement, reset, setValue] = useCounter();
  return (
    <Layout>
   <Counter count={count}increment={increment} decrement={decrement} reset={reset} setValue={setValue}></Counter>

    </Layout>
  )
}
