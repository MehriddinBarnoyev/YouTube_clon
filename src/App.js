import { BrowserRouter, Route, Routes } from "react-router-dom";
import Buttons from "./Components/Buttons";
import MiniDrawer from "./Components/Drower";
import HomePage from "./Pages/Home";

function App() {
  return (
    <MiniDrawer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<h1>Page not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </MiniDrawer>
  );
}

export default App;
