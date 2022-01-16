import { useState } from "react";
import { CtaButton } from "./components/button/CtaButton.component";
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
      <CtaButton text={"Button"} onClick={() => console.log("ok")}></CtaButton>
    </div>
  );
}

export default App;
