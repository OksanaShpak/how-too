import { Link } from "react-router-dom";

function NavMenu() {
  return (
    <nav className="menu__body">
      <ul className="menu__list">
        <li className="menu__link home">
          <Link to="/">Home</Link>
        </li>

        <li className="menu__link">TOPIC 1</li>

        <li className="menu__link">
          <Link to="/topic2">TOPIC 2</Link>
        </li>

        <li className="menu__link">
          <Link to="/topic3">TOPIC 3</Link>
        </li>

        <li className="menu__link">TOPIC 4</li>
        <li className="menu__link">TOPIC 5</li>
      </ul>
    </nav>
  );
}

export default NavMenu;
