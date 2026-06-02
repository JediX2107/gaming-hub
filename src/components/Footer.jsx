//with the help of Claude Ai I copied the Home page with some edit from Phase 1
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footerInner">

                <div className="footerBrand">
                    <Link to="/" className="footerLogo">
                        <span className="footerBadge">G</span>
                        GameStream
                    </Link>
                    <p className="footerTagline">
                        Your one-stop hub for games across Steam, PlayStation, Xbox, and Nintendo.
                    </p>
                </div>

                <div className="footerLinks">
                    <div className="footerCol">
                        <h4>Platforms</h4>
                        <ul>
                            <li><Link to="/steam">Steam</Link></li>
                            <li><Link to="/playstation">PlayStation</Link></li>
                            <li><Link to="/xbox">Xbox</Link></li>
                            <li><Link to="/nintendo">Nintendo</Link></li>
                        </ul>
                    </div>
                    <div className="footerCol">
                        <h4>Browse</h4>
                        <ul>
                            <li><Link to="/equipment">Equipment</Link></li>
                            <li><Link to="/favorites">Favorites</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                        </ul>
                    </div>
                    <div className="footerCol">
                        <h4>Platforms</h4>
                        <ul>
                            <li><a href="https://store.steampowered.com" target="_blank" rel="noopener noreferrer">Steam Store ↗</a></li>
                            <li><a href="https://www.playstation.com/en-us/ps-store/" target="_blank" rel="noopener noreferrer">PlayStation Store ↗</a></li>
                            <li><a href="https://www.xbox.com/en-US/games/all-games" target="_blank" rel="noopener noreferrer">Xbox Store ↗</a></li>
                            <li><a href="https://www.nintendo.com/us/store/" target="_blank" rel="noopener noreferrer">Nintendo Store ↗</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="footerBottom">
                <p>© {currentYear} GameStream — Built for CSCI390 Phase 2. Not affiliated with any platform.</p>
            </div>
        </footer>
    );
}

export default Footer;
