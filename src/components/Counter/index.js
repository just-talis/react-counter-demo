import style from "./counter.module.css";
import { AddIcon, MinusIcon, ResetIcon } from "../../assets/svg";
import useCounter from "../../hooks/useCounter";
import randomIntFromInterval from "../../utils/randomIntFromInterval";

function Counter() {
  const [count, increment, decrement, reset, setValue] = useCounter();

  const getStyle = (count) => {
    const negativeColors = ['#ff8008', '#ffc837', '#eb3349','#f45c43']
    const positiveColors = ['#71b280','#1d976c', '#4cb8c4', '#3cd3ad']
    const neutralColours=['#2bc0e4', '#4389a2', '#085078', '#4776e6', '#8e54e9']
    if (count === 0) return {backgroundColor : neutralColours[randomIntFromInterval(0,neutralColours.length-1)]}
    if (count < 0) return {backgroundColor : negativeColors[randomIntFromInterval(0,negativeColors.length-1)]}
    if (count > 0) return {backgroundColor : positiveColors[randomIntFromInterval(0,positiveColors.length-1)]}
  };

  return (
    <main className={style.Counter} style={getStyle(count)}>
      <section className={style.Counter_container}>
        <button onClick={decrement}>
          <MinusIcon />
        </button>
        <div
          onBlur={setValue}
          contentEditable={true}
          className={style.Counter_display}
          suppressContentEditableWarning={true}
        >
          {count}
        </div>
        <button onClick={increment}>
          <AddIcon />
        </button>
      </section>
      <button onClick={reset} className={style.Counter_reset}>
        <ResetIcon />
      </button>
    </main>
  );
}

export default Counter;
