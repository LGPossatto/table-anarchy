import { render } from "@testing-library/react";

import profileImg from "../../../../assets/images/profile.jpg";

import { FollowCard } from "../FollowCard.component";

const renderCard = () => {
  render(
    <FollowCard
      profile={{
        img: profileImg,
        name: "mock name",
        login: "mock login",
      }}
    ></FollowCard>
  );
};

describe("FollowCard", () => {
  test("renders the component", () => {
    renderCard();
  });
});
