import { useState } from "react";
import "./SignInPage.scss";
import PinkThingy from "../../components/PinkThingy";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import GreenLine from "../../components/GreenLine";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { updateNavigation } from "../../store/navigationSlice";

const SingUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [cookies, setCookies] = useCookies(["userId"]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/user/create",
        {
          email: email,
          password: password,
          isAdmin: isAdmin
        }
      );

      if (response.data.success) {
        dispatch(updateNavigation({ isAdmin }));

        if (isAdmin) {
          navigate("/staff");
        } else {
          setCookies("userId", email);
          navigate("/my-profile");
        }
      } else {
        console.error("Registration failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <main className="signin">
      <section className="signin-container">
        <header>
          <h1 className="title">SIGN UP</h1>
          <GreenLine />
        </header>
        <p className="subtitle">
          Embark on a culinary adventure with us at Tasty Bites. Sign up now to unlock a world of delightful flavors and scrumptious delights. Your journey to tastiness begins right here!
        </p>
        <PinkThingy />
        <form onSubmit={handleSubmit}>
          <div className="input-with-icon">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-with-icon">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="checkbox-container">
            <input
              type="checkbox"
              id="adminCheck"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            <label htmlFor="adminCheck">Register as Admin</label>
          </div>

          <section className="button-container">
            <Button
              label="Sign In"
              type="primary"
              onClick={() => {}}
            />
            <Button
              label="Cancel"
              onClick={() => navigate('/sign-in')}
            />
          </section>
        </form>
      </section>
    </main>
  );
};

export default SingUpPage;
