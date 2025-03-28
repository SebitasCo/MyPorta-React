import { ItemNavBar } from "../../UI/ItemNavBar/ItemNavBar";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
    <nav>
      <ul className="List">
      <NavLink to="/"> <ItemNavBar  contenido="Home" /></NavLink>
      <NavLink to="/Services"> <ItemNavBar contenido="Services" /></NavLink>
      <NavLink to="/Skills"> <ItemNavBar contenido="Skills" /></NavLink>
      <NavLink to="/Education"> <ItemNavBar contenido="Education" /></NavLink>
      </ul>
    </nav>
  );
};