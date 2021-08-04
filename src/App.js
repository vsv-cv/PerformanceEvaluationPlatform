import { Button, ButtonTheme, ButtonType, ButtonSize, ButtonForm } from "./components/atoms/Button";

function App() {
  return (
    <div className="App">
      <Button theme={ButtonTheme.DEFAULT} type={ButtonType.BUTTON} size={ButtonSize.MEDIUM}>Button</Button>
    </div>
  );
}

export default App;
