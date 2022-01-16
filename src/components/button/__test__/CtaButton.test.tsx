import { render, screen, fireEvent } from "@testing-library/react";
import { CtaButton } from "../CtaButton.component";

const mockText = "mock text";
const mockFoo = jest.fn();

const renderButton = (text = mockText, onClick = mockFoo) => {
  return render(<CtaButton text={text} onClick={onClick}></CtaButton>);
};

describe("CtaButton", () => {
  test("renders component", () => {
    renderButton();
  });

  test("renders correct text", () => {
    renderButton();

    expect(screen.getByText(mockText)).toBeInTheDocument();
  });

  test("executes the passed function", () => {
    renderButton();

    fireEvent.click(screen.getByText(mockText));

    expect(mockFoo).toBeCalled();
  });
});
