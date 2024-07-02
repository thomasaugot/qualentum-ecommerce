import "./NotFound.css";
import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  return (
    <div className="notfound-container">
      <h1 className="text">Oups! Page not Found!</h1>
      {/* <p>{error.statusText || error.message}</p> */}
      <Link to={"/"}>Back to the homepage</Link>
    </div>
  );
};
export default NotFound;
