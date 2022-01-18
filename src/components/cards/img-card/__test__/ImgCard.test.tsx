import { render, screen } from "@testing-library/react";

import placeholderImg from "../../../../assets/images/placeholder.jpg";
import profileImg from "../../../../assets/images/profile.jpg";

import { ImgCard } from "../ImgCard.component";

const mockInfo = {
  profile: {
    img: profileImg,
    name: "mock name",
    login: "mock login",
  },
  title: "mock title",
  href: "/",
};

const renderCard = (title = "") => {
  render(
    <ImgCard
      profile={mockInfo.profile}
      img={placeholderImg}
      title={title}
      href={mockInfo.href}
    ></ImgCard>
  );
};

describe("ImgCard", () => {
  test("renders component", () => {
    renderCard();
  });

  test("display title if needed", () => {
    renderCard(mockInfo.title);

    expect(screen.getByText(mockInfo.title)).toBeInTheDocument();
  });
});
