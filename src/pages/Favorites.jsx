import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import { useApp } from "../context/AppContext";
import "./Favorites.css";

function Favorites(){
    const {favorites}=useApp();

    return(
        <div>
            <Navbar />
            <div className="pageHeader">
                <h1>❤️ Your Favorites</h1>
                <p>{favorites.length} game{favorites.length !== 1 ? "s" : ""} saved </p>
            </div>

            <div className="pageContent">
                {favorites.length === 0 ? (
                    <div className="emptyState">
                        <div className="empty-icon">🎮</div>
                        <h2>No favorites yet</h2>
                        <p>Click the 🤍 heart on any game to save it here.</p>
                    </div>    
                ):(
                    <div className="gamesGrid">
                        {favorites.map(game=>(
                            <GameCard key={game.id} game={game}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Favorites;