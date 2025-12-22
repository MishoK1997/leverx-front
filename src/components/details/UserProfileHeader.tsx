import { useNavigate } from "react-router-dom";
import { Employee } from "../../types";
import { BackIcon, CopyIcon, EditIcon } from "../icons/ListIcons";

interface HeaderProps {
  user: Employee;
  originalUser: Employee | undefined;
  isEditing: boolean;
  canEdit: boolean;
  onEditToggle: () => void;
  onSave: () => void;
  onCancel: () => void;
  onNameChange: (field: string, val: string) => void;
  isLoading?: boolean;
}

export const UserProfileHeader = ({
  user,
  originalUser,
  isEditing,
  canEdit,
  onEditToggle,
  onSave,
  onCancel,
  onNameChange,
  isLoading,
}: HeaderProps) => {
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  if (!originalUser) return null;

  return (
    <div id="user-profile-detail">
      <button id="back-btn" onClick={() => navigate("/portal")}>
        <BackIcon width={25} height={25} fill="#777" />
      </button>

      <img id="u-avatar" src={originalUser.user_avatar} alt="User avatar" />

      <div className="name-wrapper">
        {isEditing ? (
          <div className="edit-name-group">
            <input
              className="edit-user-class"
              value={user.first_name}
              onChange={(e) => onNameChange("first_name", e.target.value)}
              placeholder="First Name"
            />
            <input
              className="edit-user-class"
              value={user.last_name}
              onChange={(e) => onNameChange("last_name", e.target.value)}
              placeholder="Last Name"
            />
          </div>
        ) : (
          <>
            <h1>
              <span id="u-first-name">{originalUser.first_name}</span>{" "}
              <span id="u-last-name">{originalUser.last_name}</span>
            </h1>
            <p id="u-native-name">
              {originalUser.last_name} {originalUser.middle_native_name}{" "}
              {originalUser.first_name}
            </p>
          </>
        )}
      </div>

      <button id="copy-btn" onClick={handleCopy}>
        <CopyIcon /> Copy link
      </button>

      <div id="edit-btn-wrapper">
        {canEdit &&
          (isEditing ? (
            <>
              <button
                className="user-btn-class"
                onClick={onSave}
                disabled={isLoading}
              >
                {isLoading ? "SAVING..." : "SAVE"}
              </button>
              <button
                id="edit-btn"
                className="is-editing-btn"
                onClick={onCancel}
                disabled={isLoading}
              >
                CANCEL
              </button>
            </>
          ) : (
            <button id="edit-btn" onClick={onEditToggle}>
              <EditIcon /> EDIT
            </button>
          ))}
      </div>
    </div>
  );
};
