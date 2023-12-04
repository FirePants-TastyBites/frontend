import "./StaffMenu.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import StaffMenuItemCard from "../../components/StaffMenuItemCard";
import TabButtons from "../../components/TabButtons";

const StaffMenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(
          "https://gcr5ddoy04.execute-api.eu-north-1.amazonaws.com/menu"
        );
        const updatedMenuItems = response.data.menu.map((item) => ({
          ...item,
          available: true
        }));
        setMenuItems(updatedMenuItems);
      } catch (error) {
        console.error("Error fetching menu items", error);
      }
    };

    fetchMenuItems();
  }, []);

  const toggleItemAvailability = (id) => {
    setMenuItems(
      menuItems.map((item) =>
        item.id === id ? { ...item, available: !item.available } : item
      )
    );
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const getFilteredItems = () => {
    switch (activeTab) {
      case "available":
        return menuItems.filter((item) => item.available);
      case "unavailable":
        return menuItems.filter((item) => !item.available);
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
            available={menuItem.available}
            onToggleAvailability={() => toggleItemAvailability(menuItem.id)}
          />
        ))}
      </section>
    </main>
  );
};

export default StaffMenuPage;
