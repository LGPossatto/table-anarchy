import { useState } from "react";
import { TextInput } from "../inputs/text-input/TextInput.component";
import "./navbar.style.scss";

export const NavBar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="navbar">
      <span>logo</span>
      <TextInput
        id="search"
        name="search"
        value={search}
        setValue={setSearch}
        placeholder="Search"
        noLabel={true}
      ></TextInput>
      <span>Burg</span>
    </nav>
  );
};
