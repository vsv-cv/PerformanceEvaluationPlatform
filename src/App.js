import RadioGroup from "./components/atoms/RadioGroup";
import { useState } from "react";
import List, {sortUp} from "./components/atoms/List";
import { radioMale, tableHeader, tableRows } from "./constants";

function App() {
  const [male, setMale] = useState('M');
  const [sorting, setSorting] = useState({columnId: '', type: sortUp});
  const [dataTable, setDataTable] = useState(tableRows);

  const radioHandle = (value) => setMale(value);
  const onSortChange = (state) => setSorting(state);

  const loadMore = () => {
    console.log('load was started');
    let newDataTable = dataTable.slice();
    newDataTable[newDataTable.length] = {
      items: [
        {
          columnId: '1',
          value: 2
        },
        {
          columnId: '2',
          value: 'New'
        },
        {
          columnId: '5',
          value: ' в Grid  предусмотрено решение с помощью функции minmax(). В следующем примере  minmax() используется, как значение свойства grid-auto-rows (en-US). Автоматически создаваемые строки будут как минимум 100 пикселей в высоту, а как максимум примут значение auto. Использование auto означает, что размер строки посмотрит на размер контента и растянется таким образом, чтобы вместить самый высокий элемент ячейки в этой строке. '
        }
      ],
      id: '14'
    }
    setTimeout(() => {setDataTable(newDataTable)}, 2000)
    // setDataTable(newDataTable)
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

      <div style={{width: '900px', height: '300px', overflow: 'hidden', margin: 'auto'}}>
        <List
          columns={tableHeader}
          rows={dataTable}
          sortedColumn={sorting}
          onSortChange={onSortChange}
          onScrollToGetNewData={loadMore}
        />
      </div>
      
    </div>
  );
}

export default App;