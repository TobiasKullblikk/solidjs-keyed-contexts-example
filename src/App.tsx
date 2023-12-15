import { Component1 } from './Component1'
import { Component2 } from './Component2'
import { CreateCounterProvider } from './Counter'


function App() {
  const CounterProvider1 = CreateCounterProvider("counter1");
  const CounterProvider2 = CreateCounterProvider("counter2");
  return (
    <>
      <CounterProvider1 count={1}>
        <CounterProvider2 count={20}>
          <Component1 />
          <Component2 />
        </CounterProvider2>
      </CounterProvider1>
    </>
  )
};

export default App
