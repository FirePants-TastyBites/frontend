import { Route, Routes, useLocation } from "react-router-dom";
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
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderCancellation from "./pages/OrderCancellation";
import { useEffect } from "react";
import ErrorBoundary from "./pages/ErrorBoundary";
import SingUpPage from "./pages/Sign-up";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const body = document.querySelector("body");

    if (pathname.startsWith("/staff")) {
      body.classList.add("staff-bg");
    } else {
      body.classList.remove("staff-bg");
    }
  }, [pathname]);

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
            <Route path="/my-profile" element={<Profile />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation/:id" element={<OrderConfirmation />} />
            <Route path="/cancel-order" element={<OrderCancellation />} />
            <Route path="/sign-up" element={<SingUpPage />}></Route>
            <Route path="/staff" element={<StaffLayout />} errorElement={<ErrorBoundary />} >
              <Route index element={<StaffPage />} />
              <Route path="orders" element={<StaffOrdersPage />} />
              <Route path="menu" element={<StaffMenuPage />} />
            </Route>
            <Route path="/*" element={<ErrorBoundary />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
