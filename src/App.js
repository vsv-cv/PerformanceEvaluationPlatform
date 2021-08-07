import RadioGroup from "./components/atoms/RadioGroup";
import { useState } from "react";
import List from "./components/atoms/List";
import { radioMale, tableHeader, tableRows } from "./constants";

function App() {
  const [male, setMale] = useState('M');

  const radioHandle = (value) => setMale(value);

  const tableScroll = (listHeight,scrollPosition) => {
    console.log(listHeight, scrollPosition);
  }

  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}}>
        <RadioGroup
          label="Gender"
          value={male}
          items={radioMale}
          onChange={radioHandle}
          disabled={false}
        />
      </div>

      <List
        columns={tableHeader}
        rows={tableRows}
        onScroll={tableScroll}
      />
    </div>
  );
}

export default App;
