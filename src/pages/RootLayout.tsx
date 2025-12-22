import { Outlet } from "react-router-dom";

import MainNav from "../components/MainNav";
import "../scss/style.scss";

function RootLayout() {
  return (
    <>
      <MainNav />
      <div className="portal-content">
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
