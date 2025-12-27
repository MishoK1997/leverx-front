import { useNavigate } from "react-router-dom";
import "../scss/notFound.scss";

interface UserNotFoundProps {
  width?: string;
  height?: string;
  empNotFoundStyle?: boolean;
  settings?: boolean;
}

export default function NotFound({
  width = "500px",
  height = "500px",
  empNotFoundStyle,
  settings,
}: UserNotFoundProps) {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/portal");
  };

  const handleGoSettings = () => {
    navigate("/portal/settings");
  };

  return (
    <div
      id={empNotFoundStyle ? "no-employees-container" : "not-found-container"}
    >
      <div>
        <img
          width={width}
          height={height}
          src={empNotFoundStyle ? "/pics/no-users.svg" : "/pics/404.svg"}
          alt="Not Found"
        />
      </div>

      <h1>
        {empNotFoundStyle ? "No Employees Found" : "404 - Page Not Found"}
      </h1>
      <p id="not-found-message">
        {empNotFoundStyle
          ? "Try adjusting your search or filter to find employees."
          : "The page you are looking for does not exist."}
      </p>

      <button
        id="go-home-btn"
        onClick={settings ? handleGoSettings : handleGoHome}
        className="pill-btn"
      >
        GO TO THE HOME PAGE
      </button>
    </div>
  );
}
