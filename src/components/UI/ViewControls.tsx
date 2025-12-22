import React from "react";
import { GridIcon, ListIcon } from "../icons/ViewIcons";
import { useViewMode } from "../../context/ViewContext";

interface ViewControlsProps {
  count: number;
}

/**
 * @ViewControls UI component that displays GRID or LIST view of employees
 * @ViewContext is used here due to share current mode on @Cards component
 */

function ViewControls({ count }: ViewControlsProps) {
  const { viewMode, setViewMode } = useViewMode();

  return (
    <div className="aside-right">
      <span className="employee-count">{count} Employees</span>

      <div className="view-controls">
        <button
          className={`view-switch-btn ${viewMode === "grid" ? "active" : ""}`}
          onClick={() => setViewMode("grid")}
        >
          <GridIcon
            className="svg-icon"
            style={{ width: "20px", height: "20px" }}
          />
        </button>

        <button
          className={`view-switch-btn ${viewMode === "list" ? "active" : ""}`}
          onClick={() => setViewMode("list")}
        >
          <ListIcon
            className="svg-icon"
            style={{ width: "22px", height: "22px" }}
          />
        </button>
      </div>
    </div>
  );
}

const MemoViewControls = React.memo(ViewControls);

export default MemoViewControls;
