import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            {/* NavLink is just like Link, with one special behavior, NavLink's className is a prop that takes a function. */}
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : "")}
              end // this link only considered active if the current active route ends with the path
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
