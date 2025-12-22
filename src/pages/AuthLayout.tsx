import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <div className="container">
        <div className="left-panel">
          <div className="wrapper">
            <h1>
              Lever<span id="x">X</span>
            </h1>
            <Outlet />
          </div>
        </div>
        <div className="right-panel"></div>
      </div>
    </>
  );
}

export default AuthLayout;
