import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import placeholderImg from "./assets/images/placeholder.jpg";
import profileImg from "./assets/images/profile.jpg";

import { CtaBtn } from "./components/buttons/cta-btn/CtaBtn.component";
import { TextInput } from "./components/inputs/text-input/TextInput.component";
import { ImgCard } from "./components/cards/img-card/ImgCard.component";

function App() {
  const [value, setValue] = useState("");

  const profile = {
    img: profileImg,
    name: "mock name",
    login: "mock login",
  };

  return (
    <BrowserRouter>
      <div className="App">
        <TextInput
          id={"id"}
          name={"name"}
          value={value}
          setValue={setValue}
          type="email"
          placeholder="placeholder"
        ></TextInput>
        <CtaBtn text={"Button"} onClick={() => console.log("ok")}></CtaBtn>
        <ImgCard img={placeholderImg} href="/" profile={profile}></ImgCard>
      </div>
    </BrowserRouter>
  );
}

export default App;
