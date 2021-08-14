import React, { useState } from 'react'
import { Textarea } from '.'

export const TextareaUsageExample = () => {
  const [value, setValue] = useState('')
  const handleChange = e => setValue(e.target.value);

  return (
    <div style={{ width: '350px', height: '400px' }}>
        <Textarea
          value={value}
          handleChange={handleChange}
          disabled={true}
        />
    </div>
  )
}
