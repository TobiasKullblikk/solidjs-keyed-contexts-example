import { createSignal, createContext, useContext, Accessor, Context, JSXElement } from "solid-js";

interface ICounterContext {
  count: Accessor<number>;
  increment: () => void;
  decrement: () => void;
}

const counterContexts: { [key: string]: Context<ICounterContext>} = {};

export function CreateCounterProvider(key: string) {
  return function(props: { count: number, children: JSXElement }) {
    const [count, setCount] = createSignal(props.count || 0);
    const counter: ICounterContext = {
      count,
      increment() {
        setCount(c => c + 1);
      },
      decrement() {
        setCount(c => c - 1);
      }
    };

    let CounterContext: Context<ICounterContext>;
    if (key in counterContexts) {
      CounterContext = counterContexts[key];
    } else {
      CounterContext = counterContexts[key] = createContext<ICounterContext>(counter);
    }

    return (
      <CounterContext.Provider value={counter}>
        {props.children}
      </CounterContext.Provider>
    );
  }
};

export function useCounter(key: string) { 
  return useContext(counterContexts[key]); 
};