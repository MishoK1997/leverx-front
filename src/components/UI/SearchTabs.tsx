import React from "react";
import {SearchMode} from "../../types"


interface SearchTabsProps {
  activeTab: SearchMode;
  onTabChange: (mode: SearchMode) => void;
}


/**
 * @activeTab is passed mode that represents active tab basic or advanced
 * @onTabChange the core function that sets the tab
 */

function SearchTabs({ activeTab, onTabChange }: SearchTabsProps) {
  return (
    <nav className="tabs-nav">
      <ul className="tabs">
        <li tabIndex={0}
          className={activeTab === "basic" ? "active" : ""}
          onClick={() => onTabChange("basic")}
        >
          <span className="tab-label" role="button">
            BASIC SEARCH
          </span>
        </li>

        <li tabIndex={0}
          className={activeTab === "advanced" ? "active" : ""}
          onClick={() => onTabChange("advanced")}
        >
          <span className="tab-label"  role="button">
            ADVANCED SEARCH
          </span>
        </li>
      </ul>
    </nav>
  );
}

const MemoSearchTabs = React.memo(SearchTabs);
export default MemoSearchTabs;
