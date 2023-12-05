import { useState, useEffect } from "react";
import axios from "axios";
import StaffMenuItemCard from "../../components/StaffMenuItemCard";
import TabButtons from "../../components/TabButtons";
import "./StaffMenu.scss";

const StaffMenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(
          "https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/menu"
        );
        const updatedMenuItems = response.data.menu;
        console.log(response.data.menu);
        setMenuItems(updatedMenuItems);
      } catch (error) {
        console.error("Error fetching menu items", error);
      }
    };

    fetchMenuItems();
  }, []);

  const updateItemAvailability = async (id, newAvailability) => {
    try {
      await axios.put(
        `https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/menu`,
        {
          id: id,
          isAvailable: newAvailability
        }
      );
    } catch (error) {
      console.error("Error updating item availability", error);
    }
  };

  const toggleItemAvailability = (id) => {
    const newMenuItems = menuItems.map((item) =>
      item.id === id ? { ...item, isAvailable: !item.isAvailable } : item
    );
    setMenuItems(newMenuItems);

    const item = newMenuItems.find((item) => item.id === id);
    updateItemAvailability(id, item.isAvailable);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const getFilteredItems = () => {
    switch (activeTab) {
      case "available":
        return menuItems.filter((item) => item.isAvailable);
      case "unavailable":
        return menuItems.filter((item) => !item.isAvailable);
      default:
        return menuItems;
    }
  };

  const tabs = [
    { id: "all", label: "All" },
    { id: "available", label: "Available" },
    { id: "unavailable", label: "Unavailable" }
  ];

  const filteredItems = getFilteredItems();

  return (
    <main className="staff-menu-page">
      <header>
        <h6>Welcome Maria Gomez!</h6>
        <p>Here you can update menu items availability.</p>
      </header>
      <nav>
        <TabButtons
          activeTab={activeTab}
          onClick={handleTabClick}
          tabs={tabs}
          caption="Menu Items"
        />
      </nav>
      <section className="staff-menu-container">
        {activeTab === "unavailable" && filteredItems.length === 0 && (
          <p>No items are currently unavailable.</p>
        )}
        {activeTab === "available" && filteredItems.length === 0 && (
          <p>No items are currently available.</p>
        )}
        {filteredItems.map((menuItem) => (
          <StaffMenuItemCard
            key={menuItem.id}
            name={menuItem.title}
            imageUrl={menuItem.url}
            available={menuItem.isAvailable}
            onToggleAvailability={() => toggleItemAvailability(menuItem.id)}
          />
        ))}
      </section>
    </main>
  );
};

export default StaffMenuPage;
