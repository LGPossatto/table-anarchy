import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/navbar/NavBar.component";
import { Login } from "./pages/login/Login.page";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Routes>
        <Route path={"/login"} element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
