import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/portal");
  };

  return (
    <div id="not-found-container" >
      <div >
        <img 
            width="500px" 
            height="500px" 
            src="/pics/404.svg" 
            alt="Page Not Found" 
        />
      </div>
      
      <h1>404 Page Not Found</h1>
      <p>
        Sorry, we can't find that page! It might be an old link or maybe it was moved.
      </p>
      
      <button 
        id="go-home-btn" 
        onClick={handleGoHome}
        className="pill-btn" 
      >
        GO TO THE HOME PAGE
      </button>
    </div>
  );
}
