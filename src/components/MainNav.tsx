import Nav from "./header/Nav";

import "../scss/header.scss";
import UserProfile from "./header/UserProfile";

export default function MainNav() {
  return (
    <>
      <header>
        <div className="header-left">
          <span className="company-name">LEVERX</span>
          <h1 className="app-name">EMPLOYEE SERVICES</h1>
        </div>
        <Nav />
        <UserProfile />
      </header>
    </>
  );
}
