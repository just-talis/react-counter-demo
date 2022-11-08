import { useState } from "react";

const initialCount = 0;

export default function useCounter() {
    const [count, setCount] = useState(initialCount);

    const reset = () => {
      setCount(0);
    };
    const increment = () => {
      setCount(currectCount => currectCount + 1);
    };
    const decrement = () => {
      setCount(currectCount => currectCount - 1);
    };
    const setValue = (e) => {
      setCount(Number(e.currentTarget.textContent));
    }

    return [
      count, increment, decrement, reset, setValue
    ]
}

