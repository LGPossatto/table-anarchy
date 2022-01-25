import { render } from "@testing-library/react";

import { InfoBox } from "../InfoBox.component";

const renderCard = () => {
  render(<InfoBox title="test" info="123123"></InfoBox>);
};

describe("InfoBox", () => {
  test("renders component", () => {
    renderCard();
  });
});
