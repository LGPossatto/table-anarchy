import { render, screen, fireEvent } from "@testing-library/react";
import { HeartBtn } from "../HeartBtn.component";

const mockFoo = jest.fn();

const renderBtn = (active = false) => {
  render(<HeartBtn active={active} onClick={mockFoo}></HeartBtn>);
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

  test("change heart color when active", () => {
    renderBtn(true);

    expect(
      screen.getByTestId("heart-btn").classList.contains("heart-btn-active")
    ).toBe(true);
  });
});
