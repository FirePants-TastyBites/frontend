import Button from "../components/Button";

const Home = () => {
  return (
    <div>
      <Button
        label="Order Here"
        type="primary"
        onClick={() => console.log("Primary clicked")}
      />
      <a href="/about">
        <Button
          label="Sign In"
          type="secondary"
          onClick={() => console.log("Secondary clicked")}
        />
      </a>
    </div>
  );
};

export default Home;
