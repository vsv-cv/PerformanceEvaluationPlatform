import React, { useState } from "react";
import {
  Button,
  ButtonTheme,
  ButtonType,
  ButtonSize,
} from "./components/atoms/Button";
import Input from "./components/atoms/Input/index"
import {
  IconButton,
  IconTheme,
  IconType,
  IconSize,
} from "./components/atoms/IconButton/index";

function App() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  return (
    <div className="App">
      <div>
        <IconButton
          size={IconSize.SMALL}
          theme={IconTheme.ROUNDED}
          icon="fa fa-user fa-lg fa-fw"
        />
      </div>
      <div>
        <IconButton
          size={IconSize.MEDIUM}
          typpe={IconType.BUTTON}
          theme={IconTheme.DEFAULT}
          icon="fa fa-user fa-lg fa-fw"
        />
      </div>
      <div>
        <Button disabled form="circle" icon="fa fa-user fa-lg fa-fw"></Button>
      </div>
      <div>
        <Button form="circle" icon="fa fa-user fa-lg fa-fw"></Button>
      </div>
      <div>
        <Button
          disabled
          size={ButtonSize.SMALL}
          theme={ButtonTheme.ROUNDED}
          icon="fa fa-user fa-lg fa-fw"
        >
          Button
        </Button>
      </div>
      <div>
        <Button
          type={ButtonType.BUTTON}
          size={ButtonSize.MEDIUM}
          icon="fa fa-user fa-lg fa-fw"
        >
          Button
        </Button>
      </div>
      <div>
        <Button size={ButtonSize.MEDIUM} theme={ButtonTheme.ROUNDED}>
          Button
        </Button>
      </div>
      <div>
        <Button size={ButtonSize.SMALL} theme={ButtonTheme.ROUNDED} disabled>
          Button
        </Button>
      </div>
      <div>
        <Input
          required
          type="text"
          name="name"
          label="Name"
          value={name}
          handleChange={handleChange}
          icon="fa fa-user fa-lg fa-fw"
        />
        <div>
          <Input
            disabled
            required
            type="text"
            name="name"
            value={name}
            label="Name"
            handleChange={handleChange}
            icon="fa fa-user fa-lg fa-fw"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
