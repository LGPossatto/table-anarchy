import { BrowserRouter } from "react-router-dom";
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
  href: "/",
};

const renderCard = (desc = "") => {
  render(
    <BrowserRouter>
      <TextCard
        desc={desc}
        href={mockInfo.href}
        profile={mockInfo.profile}
      ></TextCard>
    </BrowserRouter>
  );
};

describe("ImgCard", () => {
  test("renders component", () => {
    renderCard();
  });
});
