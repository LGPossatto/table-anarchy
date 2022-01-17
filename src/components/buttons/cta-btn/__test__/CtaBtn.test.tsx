import { render, screen, fireEvent } from "@testing-library/react";
import { CtaBtn } from "../CtaBtn.component";

const mockText = "mock text";
const mockFoo = jest.fn();

const renderButton = (text = mockText, onClick = mockFoo) => {
  return render(<CtaBtn text={text} onClick={onClick}></CtaBtn>);
};

describe("CtaButton", () => {
  test("renders component", () => {
    renderButton();
  });

  test("executes the passed function", () => {
    renderButton();

    fireEvent.click(screen.getByText(mockText));

    expect(mockFoo).toBeCalled();
  });
});
