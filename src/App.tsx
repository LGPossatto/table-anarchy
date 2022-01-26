import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/navbar/NavBar.component";
import { Home } from "./pages/home/Home.page";
import { Login } from "./pages/login/Login.page";

function App() {
  const href = window.location.href.split("/").at(-1);

  return (
    <div className="App">
      {href !== "login" && href !== "signup" && <NavBar></NavBar>}

      <Routes>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/home"} element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
