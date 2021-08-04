import React, { useState } from 'react'

import Button from './components/atoms/Button'

const App = () => {
  const [number, setNumber] = useState(0)

  return (
    <div>
      <div>Number: {number}</div>
      <button onClick={() => setNumber(number + 1)}>Increase number</button>
      <div>
        <Button>Button</Button>
      </div>
    </div>
  )
}

export default App
