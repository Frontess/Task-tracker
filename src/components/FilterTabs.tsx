import React, { useState } from "react";

interface FilterTabsProps {
  setFilter: (filter: "all" | "active" | "completed") => void;
}

const FilterTabs: React.FC<FilterTabsProps> = ({ setFilter }) => {
  const [activeTab, setActiveTab] = useState<"all" | "active" | "completed">(
    "all"
  );

  const handleTabClick = (filter: "all" | "active" | "completed") => {
    setActiveTab(filter);
    setFilter(filter);
  };

  return (
    <div className="filter-tabs">
      <button
        className={activeTab === "all" ? "active" : ""}
        onClick={() => handleTabClick("all")}
      >
        Все
      </button>
      <button
        className={activeTab === "active" ? "active" : ""}
        onClick={() => handleTabClick("active")}
      >
        Невыполненные
      </button>
      <button
        className={activeTab === "completed" ? "active" : ""}
        onClick={() => handleTabClick("completed")}
      >
        Выполненные
      </button>
    </div>
  );
};

export default FilterTabs;
