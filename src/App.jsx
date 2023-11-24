import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import SignInPage from "./pages/Sign-in";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/sign-in" element={<SignInPage />}></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
