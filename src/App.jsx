import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
