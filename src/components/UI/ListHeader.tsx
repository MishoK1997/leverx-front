import ListHeaderCol from "./ListHeaderCol";
import { PhotoIcon, NameIcon, DeptIcon, RoomIcon } from "../icons/ListIcons";
import "../../scss/list-header.scss";
import { useViewMode } from "../../context/ViewContext";

export default function ListHeader() {
  const iconStyle = {
    height: "14px",
    width: "14px",
    fill: "#2c68f6",
    marginRight: "6px",
  };

  const { viewMode } = useViewMode();

  if (viewMode === "list") {
    return (
      <div className="list-header-row">
        <ListHeaderCol
          className="col-photo"
          label="Photo"
          icon={<PhotoIcon className="header-svg" style={iconStyle} />}
        />

        <ListHeaderCol
          className="col-name"
          label="Name"
          icon={<NameIcon className="header-svg" style={iconStyle} />}
        />

        <div className="list-right-header-container">
          <ListHeaderCol
            className="col-dept"
            label="Department"
            icon={<DeptIcon className="header-svg" style={iconStyle} />}
          />

          <ListHeaderCol
            className="col-room"
            label="Room"
            icon={<RoomIcon className="header-svg" style={iconStyle} />}
          />
        </div>
      </div>
    );
  } else return null;
}
