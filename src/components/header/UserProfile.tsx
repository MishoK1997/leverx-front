import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderButton from "./HeaderButton";
import { LogoutIcon, QuestionMarkIcon } from "../icons/ListIcons";
import { logout } from "../../store/slices/authSlice";
import { RootState } from "../../store/store";
import BurgerMenu from "../UI/BurgerMenu";

export default function UserProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.auth.user);
  if (!user) return null;

  const signOut = () => {
    dispatch(logout());
    navigate("/sign-in", { replace: true });
  };

  return (
    <div className="header-right">
      <HeaderButton
        className="pill-btn btn-support"
        iconElement={<QuestionMarkIcon />}
        label="SUPPORT"
        altText="Question Mark"
      />

      <HeaderButton
        className="pill-btn user-profile"
        src={user?.user_avatar}
        altText="Profile avatar"
        label={`${user.first_name.toUpperCase()} ${user?.last_name.toUpperCase()}`}
        onClick={() => navigate(`/portal/users-details/${user?._id}`)}
      />

      <HeaderButton
        className="logout-btn"
        iconElement={<LogoutIcon />}
        altText="Logout button"
        onClick={() => signOut()}
      />

      <BurgerMenu
        firstName={user.first_name}
        lastName={user.last_name}
        avatar={user.user_avatar}
        onSignOut={signOut}
      />
    </div>
  );
}
