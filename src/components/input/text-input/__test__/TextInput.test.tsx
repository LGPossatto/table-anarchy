import { render, screen, fireEvent } from "@testing-library/react";

import { TextInput } from "../TextInput.component";

const mockID = "mock id";
const mockName = "mock name";
let mockValue = "mock value";
const mockSetValue = jest.fn();

const renderInput = (error = "") => {
  render(
    <TextInput
      id={mockID}
      name={mockName}
      value={mockValue}
      setValue={mockSetValue}
      errorMessage={error}
    ></TextInput>
  );
};

describe("TextInput", () => {
  test("component render", () => {
    renderInput();
  });

  test("can change input value", () => {
    const newMockValue = "new mock value";

    renderInput();
    const inputEl = screen.getByLabelText(mockName) as HTMLInputElement;

    fireEvent.change(inputEl, { target: { value: newMockValue } });

    expect(mockSetValue).toBeCalledWith(newMockValue);
  });

  test("show error message when needed", () => {
    const errorMessage = "error message";

    renderInput(errorMessage);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
