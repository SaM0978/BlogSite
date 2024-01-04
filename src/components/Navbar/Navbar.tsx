import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="main">
        <div className="logoWrap">
          <Link to="/">
            <img src="vite.svg" className="logo" />
          </Link>
        </div>
        <div className="Name">BlogSite</div>
        <div className="searchBar">
          <input type="text" name="query" className="inputBox" />

          <img src="Icons\Search-Bar\Search-Icon.png" className="searchIcon" />
        </div>
      </div>
    </nav>
  );
}
