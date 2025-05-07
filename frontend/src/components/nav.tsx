export default function Nav() {
    return (
        <header className="header">
        <nav className="navbar">
            <a href="/" className="logo">ValleryG</a>
            {/* <img className="menu" src="./src/assets/img/menu-burger.png" alt="">  for burger menu*/}
            <ul className="nav-list">
                <li><a href="/" className="nav-link active" id="Home">Home</a></li>
                <li><a href="/about" className="nav-link" id="About">About</a></li>
                <li><a href="/portfolio" className="nav-link" id="Portfolio">Portfolio</a></li>
                <li><a href="/contact" className="nav-link" id="Contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    );
}