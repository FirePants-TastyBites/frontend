import { useState } from "react";
import "./SignInPage.scss";
import PinkThingy from "../../components/PinkThingy";
import Button from "../../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import GreenLine from "../../components/GreenLine";
const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="signin">
      <section className="signin-container">
        <h1 className="title">SIGN IN</h1>
        <GreenLine />
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
              onClick={() => console.log("sign-in clicked")}
            />
            <Button
              label="Cancel"
              onClick={() => console.log("cancel clicked")}
            />
          </section>
        </form>
      </section>
    </main>
  );
};

export default SignInPage;
