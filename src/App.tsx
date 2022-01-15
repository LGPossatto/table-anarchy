import { useState } from "react";
import { TextInput } from "./components/input/text-input/TextInput.component";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <TextInput
        id={"id"}
        name={"name"}
        value={value}
        setValue={setValue}
        type="email"
        placeholder="placeholder"
      ></TextInput>
    </div>
  );
}

export default App;
