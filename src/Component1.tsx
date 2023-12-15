import { useCounter } from "./Counter";

export function Component1() {
  const context = useCounter("counter1");
  const { count, increment, decrement } = context;

  return <>
    <div>
      {count()}
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  </>;
};
