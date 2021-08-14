import React, { useState } from 'react'
import Checkbox from './Checkbox'

export const CheckboxUsageExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox 
      label="Checkbox"
      checked={checked}
      onChange={() => setChecked(prev => !prev)}
      disabled={false}
    />
  )
}
