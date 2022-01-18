import { render } from "@testing-library/react";

import placeholderImg from "../../../../assets/images/placeholder.jpg";
import profileImg from "../../../../assets/images/profile.jpg";

import { GameCard } from "../GameCard.component";

const mockInfo = {
  profile: {
    img: profileImg,
    name: "mock name",
    login: "mock login",
  },
  title: "mock title",
  desc: "mock desc",
};

const renderCard = () => {
  render(<GameCard img={placeholderImg} {...mockInfo}></GameCard>);
};

describe("ImgCard", () => {
  test("renders component", () => {
    renderCard();
  });
});
