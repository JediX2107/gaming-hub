import { useState } from "react";
import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import {games, genres} from "../data/games";
import "./Steam.css";

function Steam(){
    const [search, setSearch]=useState("");
    const [selectedGenre, setSelevtedGenre]=useState("All");
    const [sortBy, setSortBy]=useState("default");

    let filtered = games.filter(g=>g.genre===selectedGenre);
    if (selectedGenre!=="All"){
        filtered=filtered.filter(g=>g.genre===selectedGenre);
    }
    if(search.trim()){
        filtered=filtered.filter(g=>
            g.title.toLowerCase().includes(search.toLowerCase()) 
        );
    }

    if(sortBy==="price-asc") filtered =[...filtered].sort((a,b)=>a.price - b.price);
    if(sortBy==="price-desc") filtered =[...filtered].sort((a,b)=>b.price - a.price);
    if(sortBy==="rating") filtered =[...filtered].sort((a,b)=>b.rating - a.rating);

    const steamGenres=["All", ...new Set(
        games.filter(g=>g.platform==="Steam").map(g=>g.genre)
    )];

    return(
        <div>
            <Navbar />

            <div className="hero steam-hero">
                <h1>🎮 Steam Store</h1>
                <p>Browse the best PC games - all in one place.</p>
            </div>

            <div className="filtersBar">
                {}
                <input 
                    type="text"
                    className="searchInput"
                    placeholder="Search Steam games..."
                    value={search}
                    onChange={e=>setSearch(e.target.value)}
                />
            </div>

            {}
            <div className="filterGroup">
                {steamGenres.map(genre=>(
                    <button
                        key={genre}
                        className={'filter-btn ${selectedGenre === genre ? "active" : ""'}
                        onClick={()=>setSelevtedGenre(genre)}
                    >
                        {genre}
                    </button>
                ))}
            </div>

            <div className="pageContent">
                {filtered.length===0 ? (
                    <div className="noResults">
                        <p>No games found for "{search}"</p>
                        <button onClick={()=>{setSearch(""); setSelevtedGenre("All");}}>
                            Clear filters
                        </button>
                    </div>
                ):(
                    <div className="gameGrid">
                        {filtered.map(game=>(
                            <GameCard key={game.id} game={game}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
export default Steam;