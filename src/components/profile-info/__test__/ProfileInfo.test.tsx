import { render } from "@testing-library/react";
import { ProfileInfo } from "../ProfileInfo.component";

import profileImg from "../../../../assets/images/profile.jpg";

const renderComp = () => {
  render(
    <ProfileInfo img={profileImg} name="John" login={"@jonh"}></ProfileInfo>
  );
};

describe("ProfileInfo", () => {
  test("renders the component", () => {
    renderComp();
  });
});
