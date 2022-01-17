import { render, screen, fireEvent } from "@testing-library/react";
import { HeartBtn } from "../HeartBtn.component";

const mockFoo = jest.fn();

const renderBtn = () => {
  render(<HeartBtn onClick={mockFoo}></HeartBtn>);
};

describe("HeartBtn", () => {
  test("renders component", () => {
    renderBtn();
  });

  test("exc function on click", () => {
    renderBtn();

    fireEvent.click(screen.getByTestId("heart-btn"));

    expect(mockFoo).toBeCalled();
  });
});
