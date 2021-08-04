import React, { useState } from 'react'

const App = () => {
  const [number, setNumber] = useState(0)

  return (
    <div>
      <div>Number: {number}</div>
      <button onClick={() => setNumber(number + 1)}>Increase number</button>
    </div>
  )
}

export default App
