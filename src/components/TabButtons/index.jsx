import "./TabButtons.scss";

const TabButtons = ({ tabs, activeTab, onClick }) => {
  return (
    <section className="buttons-container">
      <p>Orders to handle</p>
      <nav>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active " + tab.id : ""}`}
            onClick={() => onClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </section>
  );
};

export default TabButtons;
