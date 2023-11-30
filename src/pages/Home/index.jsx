import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import PinkThingy from "../../components/PinkThingy";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home">
      <section className="hero">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1559054663-e8d23213f55c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image of sandwich"
          />
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
              onClick={() => navigate('/menu')}
            />
      
          
            <Button
              label="Sign In"
              type="secondary"
              onClick={() => navigate('/sign-in')}
            />
          
        </div>
      </section>

      <section className="content-section-01">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?q=80&w=1210&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="People dining in restaurant."
          />
        </figure>

        <section className="info">
          <h2>Delight Your Palate, Bite by Bite!</h2>
          <p>
            Welcome to a culinary journey where each bite is a delight! Our
            restaurant is committed to providing nutritious and delicious
            options, whether you dine in or enjoy our convenient delivery
            service, we invite you to savor the moments and make our restaurant
            your home for wholesome and delightful meals.
          </p>
        
            <Button
              label="View Our Menu"
              type="primary"
              onClick={() => navigate('/menu')}
            />
          
        </section>
      </section>

      <PinkThingy />

      <section className="content-section-02">
        <section className="image">
          {/* div with background image instead of img tag */}
          <div></div>
        </section>

        <section className="info">
          <h2>Embrace Family Time at Tasy Bites!</h2>
          <p>
            We at Tasty Bites believe in providing a delightful dining
            experience for the whole family. Our menu is crafted with care,
            offering a range of healthy and flavorful options that both parents
            and kids will love. Join us in creating cherished moments and
            savoring delicious meals in a warm and inviting atmosphere.
          </p>
     
            <Button
              label="Explore Our Story"
              type="primary"
              onClick={() => navigate('/about')}
            />
      
        </section>
      </section>
    </section>
  );
};

export default Home;
