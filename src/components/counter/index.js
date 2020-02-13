import React from 'react'

export const index = 0

const Counter = () => {
  const [count, setCount] = React.useState(0)

  return (
    <React.Fragment>
      <h4>Counter</h4><br />
      <div className="container">
        <button
          onClick={() =>
            setCount(count - 1)
          }
        >
          -
        </button>
        <h2>{count}</h2>
        <button
          onClick={() =>
            setCount(count + 1)
          }
        >
          +
        </button>
      </div>
    </React.Fragment>
  )
}

export default Counter
