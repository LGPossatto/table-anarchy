import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import placeholderImg from "./assets/images/placeholder.jpg";
import profileImg from "./assets/images/profile.jpg";

import { CtaBtn } from "./components/buttons/cta-btn/CtaBtn.component";
import { TextInput } from "./components/inputs/text-input/TextInput.component";
import { ImgCard } from "./components/cards/img-card/ImgCard.component";
import { TextCard } from "./components/cards/text-card/TextCard.component";
import { FollowCard } from "./components/cards/follow-card/FollowCard.component";

function App() {
  const [value, setValue] = useState("");

  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptates quisquam rerum dicta facilis vero voluptatem asperiores doloremque temporibus perferendis dolor nulla iure, repellendus expedita aliquam animi! Hic, veniam cum.";
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
        <TextCard desc={desc} href="/" profile={profile}></TextCard>
        <FollowCard profile={profile}></FollowCard>
      </div>
    </BrowserRouter>
  );
}

export default App;
