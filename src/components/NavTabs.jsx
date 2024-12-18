import { Link, useLocation } from "react-router-dom";
import "../css/navtabs.css";

export default function NavTabs(){
  const currentPage = useLocation().pathname;

  return(
    <nav>
      <ul>
        <li>
          <Link to="/About">
            About
          </Link>
        </li>
        <li>
          <Link to="/Portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/Resume">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  )
}