import React from 'react'
import { useMachine } from "@xstate/react";
import counterMachine from './counter-machine'
import {FETCH_URL, PUT_URL} from '../../api'
import axios from 'axios'

export const index = 0

const Counter = () => {
  const [state, send] = useMachine(counterMachine);
  
  const updateCountAsync = (type) => {
    let updatedCount = state.context.count;
    if(type === "increment") {
        updatedCount += 1;     
    } else if(type === "decrement") {
        updatedCount -= 1;
    } else {
        updatedCount = 0; // reset
    }

    axios({
        url: `${PUT_URL}${index + 1}`,
        method: 'PUT',
        data: {
          count: updatedCount
        }
      })
        .then(res => {
          const responseData = res.data
          const updatedCount = responseData.count;
          send({type: "UPDATE", payload: updatedCount})
        })
        .catch(err => console.log({err}))
  }

  React.useEffect(() => {
    axios({
      method: 'GET',
      url: FETCH_URL
    })
      .then(res => {
        const responseData = res.data
        send({type: "UPDATE", payload: responseData[index].count})
      })
      .catch(err => console.log({err}))
  }, [send])

  return (
    <React.Fragment>
      <h4>Counter xstate async</h4><br />
      <div className="container">
        <button onClick={() => {
          updateCountAsync("reset")
        }}>
          RESET
        </button>
        <button
          onClick={() =>
            updateCountAsync("decrement")
          }
        >
          -
        </button>
        <h2>{state.context.count}</h2>
        <button
          onClick={() =>
            updateCountAsync("increment")
          }
        >
          +
        </button>
      </div>
    </React.Fragment>
  )
}

export default Counter
