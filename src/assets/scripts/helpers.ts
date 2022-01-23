export const toTitleCase = (text: string) => {
  const textArr = text.split(" ");
  let newText = "";

  textArr.forEach((string) => {
    let newString = string[0].toUpperCase();

    for (let i = 1; i < string.length; i++) {
      newString += string[i];
    }

    newText += newString;
  });

  return newText;
};
