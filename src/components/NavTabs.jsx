import { Link, useLocation } from "react-router-dom";
import "../css/navtabs.css";

export default function NavTabs(){
  const currentPage = useLocation().pathName.toLowerCase();

  return(
    <nav>
      <ul>
        <li>
          <Link>
          
          </Link>
        </li>
        <li>
          <Link>
          
          </Link>
        </li>
        <li>
          <Link>
          
          </Link>
        </li>
        <li>
          <Link>
          
          </Link>
        </li>
      </ul>
    </nav>
  )
}