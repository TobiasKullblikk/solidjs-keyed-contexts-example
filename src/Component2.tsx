import { useCounter } from "./Counter";

export function Component2() {
  const context = useCounter("counter2");
  const { count, increment, decrement } = context;

  return <>
    <div>
      {count()}
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  </>;
};
