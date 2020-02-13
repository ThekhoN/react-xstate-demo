import React from 'react'
import {FETCH_URL, PUT_URL} from '../../api'
import axios from 'axios'
import {getUpdatedCount} from '../utils'

export const index = 0

const Counter = () => {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    axios({
      method: 'GET',
      url: FETCH_URL
    })
      .then(res => {
        const responseData = res.data
        setCount(responseData[index].count)
      })
      .catch(err => console.log({err}))
  }, [])

  const updateCountAsync = type => {
    const updatedCount = getUpdatedCount(
      count,
      type
    )
    axios({
      url: `${PUT_URL}${index + 1}`,
      method: 'PUT',
      data: {
        count: updatedCount
      }
    })
      .then(res => {
        const responseData = res.data
        setCount(responseData.count)
      })
      .catch(err => console.log({err}))
  }

  return (
    <React.Fragment>
      <div className="container">
        <h4>Counter - Async</h4><br />
        <button
          onClick={() =>
            updateCountAsync('DECREMENT')
          }
        >
          -
        </button>
        <h2>{count}</h2>
        <button
          onClick={() =>
            updateCountAsync('INCREMENT')
          }
        >
          +
        </button>
      </div>
    </React.Fragment>
  )
}

export default Counter
