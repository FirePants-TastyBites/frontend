import { useState } from "react";
import "./SignInPage.scss";
import PinkThingy from "../../components/PinkThingy";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import GreenLine from "../../components/GreenLine";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateNavigation } from "../../store/navigationSlice";
import { useCookies } from "react-cookie";
import DetailsButton from "../../components/DetailsButton";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, setCookies] = useCookies(["userId"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/user",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.success) {
        dispatch(updateNavigation({ isAdmin: response.data.isAdmin }));

        if (response.data.isAdmin) {
          navigate("/staff");
        } else {
          setCookies("userId", email);
          navigate("/my-profile");
        }
      } else {
        console.error("Sign in failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  return (
    <main className="signin">
      <section className="signin-container">
        <header>
          <h1 className="title">SIGN IN</h1>
          <GreenLine />
        </header>
        <p className="subtitle">
          Unlock a personalized experience by signing in! Access your order
          history, effortlessly reorder your favorite meals, and enjoy exclusive
          promotions tailored just for you.
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

          <section className="button-container">
            <Button
              label="Sign In"
              type="primary"
              onClick={() => {}}
            />
            <Button
              label="Cancel"
              onClick={() => navigate('/')}
            />
          </section>
        </form>
      </section>
      <section className="sign-up-section">
        <p>Don't have an account?</p>
        <DetailsButton onClick={() => navigate('/sign-up')}>Sign Up Here</DetailsButton>
      </section>
    </main>
  );
};

export default SignInPage;
