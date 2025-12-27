import { Employee } from "../types";
import "../scss/cards.scss";
import "../scss/grid-list.scss";
import React from "react";
import { useViewMode } from "../context/ViewContext";
import { DeptIcon, RoomIcon } from "./icons/ListIcons";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

interface CardsProps {
  allUsers: Employee[];
}

// Main card component that displays users

function Cards({ allUsers }: CardsProps) {
  const { viewMode } = useViewMode();

  const containerClass = `employee-list-container ${viewMode === "grid" ? "view-grid" : "view-list"}`;

  return (
    <>
      {allUsers.length === 0 && (
        <NotFound width="300px" height="300px" empNotFoundStyle />
      )}
      <div className={containerClass}>
        {allUsers?.map((emp, index) => (
          <Link
            to={`users-details/${emp._id}`}
            className="card-link-wrapper"
            key={emp._id}
          >
            <article
              className="employee-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={emp.user_avatar} alt={emp.first_name} />
              <div className="card-info">
                <h3>
                  {emp.first_name} {emp.last_name}
                </h3>

                {viewMode === "grid" && <hr />}

                <div className="details">
                  <span>
                    <DeptIcon style={iconStyle} />
                    {emp.department}
                  </span>
                  <span>
                    <RoomIcon style={iconStyle} />
                    {emp.room}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}

const MemoCards = React.memo(Cards);

export default MemoCards;

const iconStyle = {
  height: "14px",
  width: "14px",
  fill: "#2c68f6",
  marginRight: "6px",
};
