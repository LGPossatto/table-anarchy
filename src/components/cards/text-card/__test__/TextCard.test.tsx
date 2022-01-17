import { render } from "@testing-library/react";

import profileImg from "../../../../assets/images/profile.jpg";

import { TextCard } from "../TextCard.component";

const mockInfo = {
  profile: {
    img: profileImg,
    name: "mock name",
    login: "mock login",
  },
  desc: "mock desc",
};

const renderCard = (desc = "") => {
  render(<TextCard desc={desc} profile={mockInfo.profile}></TextCard>);
};

describe("ImgCard", () => {
  test("renders component", () => {
    renderCard();
  });
});