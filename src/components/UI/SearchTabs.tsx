import React from "react";
import {SearchMode} from "../../types"


interface SearchTabsProps {
  mode: SearchMode;
  setMode: (mode: SearchMode) => void;
}


/**
 * @mode is passed mode that represents active tab basic or advanced
 * @setMode the core function that sets the tab
 */

function SearchTabs({ mode, setMode }: SearchTabsProps) {
  return (
    <nav className="tabs-nav">
      <ul className="tabs">
        <li tabIndex={0}
          className={mode === "basic" ? "active" : ""}
          onClick={() => setMode("basic")}
        >
          <span className="tab-label" role="button">
            BASIC SEARCH
          </span>
        </li>

        <li tabIndex={0}
          className={mode === "advanced" ? "active" : ""}
          onClick={() => setMode("advanced")}
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
