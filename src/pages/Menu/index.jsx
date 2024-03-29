import "./menu.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import MenuItem from "../../components/MenuItem/";
import GreenLine from '../../components/GreenLine'
import foodImage from "/food.jpg";
import Modal from "../../components/Modal/";
import { motion } from "framer-motion";

const Menu = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    axios
      .get("https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/menu")
      .then((response) => {
        const availableFoods = response.data.menu.filter(
          (food) => food.isAvailable
        );
        setFoods(availableFoods);
        setFilteredFoods(availableFoods);
      })
      .catch((error) => console.error(error));
  }, []);

  const filterFoods = (category) => {
    setActiveCategory(category);
    setFilteredFoods(
      category === "All"
        ? foods
        : foods.filter((food) => food.category === category && food.isAvailable)
    );
  };

  const handleItemClick = (food) => {
    setCurrentItem(food);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  return (
    <main className="menu-page">
      <header className="menu-page-header">
        <h1>Our menu</h1>
        <GreenLine />
      </header>
      <nav className="category-buttons">
        <button
          onClick={() => filterFoods("All")}
          className={activeCategory === "All" ? "active" : ""}
        >
          All
        </button>
        {Array.from(new Set(foods.map((food) => food.category))).map(
          (category) => (
            <button
              key={category}
              onClick={() => filterFoods(category)}
              className={activeCategory === category ? "active" : ""}
            >
              {category}
            </button>
          )
        )}
      </nav>

      <section className="menu-grid">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={food.id}
            >
              <MenuItem
                item={food}
                name={food.title}
                price={food.price}
                imageUrl={food.url || foodImage}
                category={food.category}
                onIconClick={() => handleItemClick(food)}
              />
            </motion.div>
          ))
        ) : (
          <p>No items available at the moment.</p>
        )}
      </section>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          item={currentItem}
        />
      )}
    </main>
  );
};

export default Menu;
