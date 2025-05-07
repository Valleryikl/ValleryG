import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <header className="header">
            <nav className="navbar">
                <NavLink to="/" className="logo">ValleryG</NavLink>
                {/* <img className="menu" src="./src/assets/img/menu-burger.png" alt="">  for burger menu */}
                <ul className="nav-list">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                            id="Home"
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                            id="About"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/portfolio" 
                            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                            id="Portfolio"
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contact" 
                            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                            id="Contact"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
