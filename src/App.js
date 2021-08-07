import { Dropdown } from './components/atoms/Dropdown'
import { useState } from 'react';

const fakeDropdownProps = {
  title: 'Favorite food',
  options: [
    {
      key: '1',
      text: 'Sushi',
    },
    {
      key: '2',
      text: 'Sushi',
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
  disabled: false,
  // multiselect: true
}

function App() {
  const [keys, setKeys] = useState(['3', '2']);

  return (
    <div style={{width: '300px', fontSize: '22px', position: 'absolute', top: '40%', left: '20%'}}>
      <Dropdown
        keys={keys}
        setKeys={setKeys}
        {...fakeDropdownProps}
      />
    </div>
  );
}

export default App;
