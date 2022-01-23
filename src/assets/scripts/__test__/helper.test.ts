import { toTitleCase } from "../helpers";

describe("toTitleCase", () => {
  test("return correct formated text", () => {
    const text = "mockText";

    expect(toTitleCase(text)[0]).toBe("M");
  });

  test("return correct formated frase", () => {
    const text = "some mock text Test";

    const newTextArr = toTitleCase(text).split(" ");

    for (const text in newTextArr) {
      const char = newTextArr[text][0];

      expect(char).toBe(char.toLowerCase().toUpperCase());
    }
  });
});
