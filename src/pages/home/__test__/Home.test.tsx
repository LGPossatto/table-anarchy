import { render } from "@testing-library/react";

import { Home } from "../Home.page";

const renderPage = () => {
    render(<Home></Home>)
}

describe('Home', () => {
  test('component render', () => {
    renderPage();
  });
  ;
});
