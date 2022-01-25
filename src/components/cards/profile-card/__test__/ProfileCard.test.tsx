import { render } from "@testing-library/react";

import { ProfileCard } from "../ProfileCard.component";

const renderCard = () => {
  render(<ProfileCard></ProfileCard>);
};

describe("ProfileCard", () => {
  test("renders component", () => {
    renderCard();
  });
});
