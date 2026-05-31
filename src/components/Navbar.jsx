import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useApp } from "../context/AppContext";
import "./Navbar.css";

function Navbar(){
    const [menuOpen, setMenuOpen]=useState(false);
    const {cart, favorites}=useApp();
    const location =useLocation();

    const cartCount=cart.reduce((sum,item)=>sum+item.quantity,0);

    const isActive=(path)=>location.pathname===path ? "active" : "";

    return(
        <nav className="navbar">
            <Link to="/" className="brand">
                <span className="brandBadge">G</span>
                GameStream
            </Link>
            <ul className={'nav-links ${menuOpen ? "open" : ""}'}>
                <li><Link to="/" className={isActive("/")}>Home</Link></li>
                <li><Link to="/steam" className={isActive("/steam")}>Steam</Link></li>
                <li><Link to="/playstation" className={isActive("/playstation")}>PlayStation</Link></li>
                <li><Link to="/xbox" className={isActive("/xbox")}>Xbox</Link></li>
                <li><Link to="/nintendo" className={isActive("/nintendo")}>Nintendo</Link></li>
                <li><Link to="/equipment" className={isActive("/equipment")}>Equipment</Link></li>
            </ul>

            <div className="navActions">
                <Link to="/favorites" className="iconBtn" title="Favorites">
                  ❤️ {favorites.length>0 && <span className="badge">{favorites.length}</span>}  
                </Link>
                <Link to="/cart" className="iconBtn" title="Cart">
                  🛒 {cartCount>0 && <span className="badge">{cartCount}</span>}  
                </Link>
                <Link to="/login" className="cta">Login</Link>
            </div>

            <button 
                className="menuToggle"
                onClick={()=> setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? "✕" : "☰"}
            </button>
        </nav>
    );
}

export default Navbar;