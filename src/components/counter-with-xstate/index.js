import React from 'react'
import { useMachine } from "@xstate/react";
import counterMachine from './counter-machine'

const Counter = () => {
  const [state, send] = useMachine(counterMachine);

  return (
    <React.Fragment>
      <h4>Counter</h4><br />
      <div className="container">
        <button
          onClick={() =>
            send("DECREMENT")
          }
        >
          -
        </button>
        <h2>{state.context.count}</h2>
        <button
          onClick={() =>
            send("INCREMENT")
          }
        >
          +
        </button>
      </div>
    </React.Fragment>
  )
}

export default Counter
