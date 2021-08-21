import { Dropdown } from './index'
import { useState } from 'react';

export const DropdownUsageExample = () => {
  const [keys, setKeys] = useState(['3']);

  const fakeDropdownProps = {
    title: 'Favorite food',
    options: [
      {
        key: '1',
        text: 'Sushi',
      },
      {
        key: 2,
        text: 'Piza',
      },
      {
        key: '3',
        text: 'Burger',
      },
      {
        key: '4',
        text: 'Roll',
      },
      {
        key: '5',
        text: 'Any',
      },
      {
        key: '6',
        text: 'Bar',
      }
    ],
    onSelect: keys => setKeys(keys),
    disabled: false,
    multiselect: true
  }

  return (
    <div style={{width: '300px'}}>
      <Dropdown
        keys={keys}
        {...fakeDropdownProps}
      />
    </div>
  );
}
