import { Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import SignInPage from "./pages/Sign-in";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import StaffPage from "./pages/Staff";
import StaffLayout from "./components/StaffLayout";
import StaffOrdersPage from "./pages/StaffOrders";
import StaffMenuPage from "./pages/StaffMenu";

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
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/staff" element={<StaffLayout />}>
              <Route index element={<StaffPage />} />
              <Route path="orders" element={<StaffOrdersPage />} />
              <Route path="menu" element={<StaffMenuPage />} />
            </Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
