import { memo } from "react";
import { isRoleEditable } from "../../utils/commonUtils";
import { useUpdateUserRoleMutation } from "../../store/api/usersApi";

/**
 * 
 * @updateRole API that sends a request to back about role update
 * @isRoleEditable util checks if an actor can make changes on a specific user @returns boolean as canEdit
    @isLoading attached to buttons in order to avoid double clicking 
*/

function UserRoleRow({ user, currentUser }: any) {
  const [updateRole, { isLoading }] = useUpdateUserRoleMutation();

  // Boolean permission check
  const canEdit = isRoleEditable(currentUser, user);

  const handleUpdate = async (newRole: string) => {
    if (!canEdit || user.role === newRole) return;
    try {
      await updateRole({ id: user._id, role: newRole }).unwrap();
    } catch (e) {
      console.error("Failed to update roleeeeeee:", e);
    }
  };

  return (
    <div className="grid-row data-row">
      {/* User Info */}
      <div className="user-info">
        <img className="avatar" src={user.user_avatar} alt={user.first_name} />
        <div className="user-text">
          <span className="user-name">{user.first_name}</span>
          <span className="user-lastName">{user.last_name}</span>
        </div>
      </div>

      {/* Emp | HR buttons */}
      <div className="role-toggle">
        <button
          className={`btn-toggle ${user.role === "employee" ? "active" : ""}`}
          onClick={() => handleUpdate("employee")}
          disabled={!canEdit || isLoading}
        >
          EMPLOYEE
        </button>

        <button
          className={`btn-toggle ${user.role === "hr" ? "active" : ""}`}
          onClick={() => handleUpdate("hr")}
          disabled={!canEdit || isLoading}
        >
          HR
        </button>
      </div>

      {/* Admin Button */}
      <div>
        <button
          className={`btn-admin ${user.role === "admin" ? "active" : ""}`}
          onClick={() => handleUpdate("admin")}
          disabled={!canEdit || isLoading}
        >
          ADMIN
        </button>
      </div>
    </div>
  );
}

export default memo(UserRoleRow);
