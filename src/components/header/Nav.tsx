import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../store/store";

interface NavProps {
  className?: string;
  closeMenu?: () => void;
}

export default function Nav({ className = "header-nav", closeMenu }: NavProps) {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <nav className={className}>
      <NavLink
        to="/portal"
        end
        onClick={closeMenu}
        className={({ isActive }) =>
          isActive ? "nav-item active" : "nav-item"
        }
      >
        Address Book
      </NavLink>

      {user?.role === "admin" && (
        <NavLink
          to="/portal/settings"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Settings
        </NavLink>
      )}
    </nav>
  );
}
