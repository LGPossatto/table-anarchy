import { render } from "@testing-library/react";

import { Login } from "../Login.page";

const renderPage = () => {
    render(<Login></Login>)
}

describe('Login', () => {
  test('component render', () => {
    renderPage();
  });
  ;
});
