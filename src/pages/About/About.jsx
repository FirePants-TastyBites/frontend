import "./About.scss";
import PinkThingy from "../../components/PinkThingy";

const AboutPage = () => (
  <main className="about-page">
    <h2>ABOUT US</h2>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="294"
      height="4"
      viewBox="0 0 294 4"
      fill="none"
    >
      <path
        d="M2 2H291.5"
        stroke="#03A864"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
    <section>
      <h3>Our Philosophy</h3>
      <p>
        We’re more than just a restaurant; We are a haven for food lovers. Our
        philosophy is simple - exceptional quality, the freshest ingredients,
        and a pinch of our secret magic in every bite. From farm to table, we
        ensure that every ingredient we use meets our high standards of
        freshness and sustainability.
      </p>
    </section>

    <article>
      <img src="/about1.jpg" alt="" className="img-small" />
    </article>

    <section>
      <h3>Our Menu</h3>
      <p>
        At Tasty Bites, our menu is a vibrant mix of classic favourites and
        innovative creations. Each dish is a testament to our chefs expertise,
        creativity, and unwavering commitment to delighting your taste buds.
        Whether you’re in the mood for a hearty meal, a light snack, or a sweet
        treat, our menu has something special for everyone.
      </p>
    </section>

    <PinkThingy />
    <section>
      <h3>Embrace Family Time at Tasty Bites</h3>
      <p>
        Tasty Bites, a place where every member of the family, especially the
        little ones, is cherished. Our restaurant is more than just a dining
        space; It is a vibrant playground of flavors and fun for children and
        parents alike!
      </p>
    </section>

    <article>
      <img src="/kids.jpg" alt="" className="img-small" />
    </article>

    <PinkThingy />
    <section>
      <h3>Fast Deliveries at Tasty Bites</h3>
      <p>
        At Tasty Bites, we understand that your time is precious. Thats why we
        have honed our delivery process to be as swift and efficient as the
        bustling city we call home. Whether you are in the middle of a busy
        workday, juggling life is many tasks, or simply craving a quick bite,
        our fast delivery service ensures that your favorite meals reach you
        fresh, hot, and most importantly, on time.
      </p>
    </section>

    <article>
      <img src="/about2.jpg" alt="" className="img-wide" />
    </article>
    <section>
      <h3>Nutritional Information at Taste Bites</h3>
      <p>
        At Tasty Bites, we believe that eating well should be a feast for your
        taste buds and a boon for your health. That is why transparency about
        the nutritional content of our meals is a cornerstone of our culinary
        philosophy. Every dish on our menu comes with detailed nutritional
        information, empowering you to make informed choices that align with
        your dietary needs and goals. Our commitment to your health goes beyond
        just listing calories.
      </p>
      <p>
        We provide a comprehensive breakdown of macronutrients, including fats,
        proteins, carbohydrates, as well as essential vitamins and minerals.
        Whether you are counting macros, managing dietary restrictions, or
        simply curious about what goes into your food, our nutritional
        information is designed to keep you well-informed and at ease.
      </p>
    </section>

    <section className="cta-container">
      <article className="cta">
        <p>Call Us</p>
        <a href="tel:0123456789">+ 000-000-000</a>
      </article>
      <article className="cta">
        <p>Our Location</p>
        <a>123 34 Somewhere Over the Rainbow</a>
      </article>
      <article className="cta">
        <p>Email Us</p>
        <a href="mailto:info@tastybites.se">info@tastybites.se</a>
      </article>
    </section>

    <section className="map">
      <img src="/map.png" alt="" />
    </section>
  </main>
);

export default AboutPage;
