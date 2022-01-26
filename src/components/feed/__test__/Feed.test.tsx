import { render } from "@testing-library/react";

import { Feed } from "../Feed.component";

const renderCard = () => {
  render(<Feed></Feed>);
};

describe("Feed", () => {
  test("renders component", () => {
    renderCard();
  });
});
