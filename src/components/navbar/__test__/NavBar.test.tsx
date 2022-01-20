import { render } from "@testing-library/react";
import { NavBar } from "../NavBar.component";

const renderButton = () => {
  return render(<NavBar></NavBar>);
};

describe("CtaButton", () => {
  test("renders component", () => {
    renderButton();
  });
});
