import Button from "../components/Button";

const Home = () => {
  return (
    <section className="home">

      <section className="hero">
        <figure>
          <img src="https://images.unsplash.com/photo-1559054663-e8d23213f55c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image of sandwich" />
        </figure>

        <div>
          <section className="heading">
            <p>Welcome to</p>
            <h1>Tasty Bites</h1>
            <p>Where Flavor Meets Freshness!</p>
          </section>

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

      </section>

      <section className="content-section-01">
        <figure>
          <img src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?q=80&w=1210&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="People dining in restaurant." />
        </figure>

        <h2>Delight Your Palate,
          <br />Bite by Bite!
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Integer vulputate ornare aliquet suspendisse. Quis dui phasellus donec egestas amet urna. Feugiat quis mattis pharetra euismod pulvinar scelerisque.
          Vitae sit commodo enim et leo. Commodo ipsum lorem eros non id congue vel praesent velit.
        </p>

        <a href="#">
          <Button
            label="View Our Menu"
            type="primary"
            onClick={() => console.log("Primary clicked")}
          />
        </a>

      </section>

      <section className="content-section-02">
        <figure>
          <img src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?q=80&w=1210&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="People dining in restaurant." />
        </figure>

        <h2>We Have Something for
          <br />Every Taste!
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Integer vulputate ornare aliquet suspendisse. Quis dui phasellus donec egestas amet urna. Feugiat quis mattis pharetra euismod pulvinar scelerisque.
          Vitae sit commodo enim et leo. Commodo ipsum lorem eros non id congue vel praesent velit.
        </p>

        <a href="#">
          <Button
            label="See Our Healthy Options"
            type="primary"
            onClick={() => console.log("Primary clicked")}
          />
        </a>

      </section>

    </section>
  );
};

export default Home;
