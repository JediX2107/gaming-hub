// with the help of Claude Ai I copied the Home page with some edit from Phase 1

import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import GameCard from "../components/GameCard";
import Footer from "../components/Footer";
import { games } from "../data/games";
import "./Home.css";


const featured = [
    games.find(g => g.id === "StardewValley"),
    games.find(g => g.id === "MarvelSpider-Man2"),
    games.find(g => g.id === "Minecraft"),
    games.find(g => g.id === "ZeldaTearsOfTheKingdom"),
].filter(Boolean);


const featuredIds = new Set(featured.map(g => g.id));
const topPicks = [...games]
    .filter(g => !featuredIds.has(g.id) && typeof g.price === "number")
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

const platforms = [
    {
        name: "Steam",
        path: "/steam",
        color: "#66c0f4",
        bg: "rgba(102,192,244,0.08)",
        border: "rgba(102,192,244,0.25)",
        icon: "🖥️",
        count: games.filter(g => g.platform === "Steam").length,
    },
    {
        name: "PlayStation",
        path: "/playstation",
        color: "#66a0ff",
        bg: "rgba(102,160,255,0.08)",
        border: "rgba(102,160,255,0.25)",
        icon: "🎮",
        count: games.filter(g => g.platform === "PlayStation").length,
    },
    {
        name: "Xbox",
        path: "/xbox",
        color: "#9bf00b",
        bg: "rgba(155,240,11,0.08)",
        border: "rgba(155,240,11,0.25)",
        icon: "🟢",
        count: games.filter(g => g.platform === "Xbox").length,
    },
    {
        name: "Nintendo",
        path: "/nintendo",
        color: "#ff4d4d",
        bg: "rgba(255,77,77,0.08)",
        border: "rgba(255,77,77,0.25)",
        icon: "🍄",
        count: games.filter(g => g.platform === "Nintendo").length,
    },
];

function Home() {
    const [search, setSearch] = useState("");

    const searchResults = search.trim()
        ? games.filter(g =>
            g.title.toLowerCase().includes(search.toLowerCase())
        ).slice(0, 12)
        : [];

    return (
        <div>
            <Navbar />

            {}
            <section className="homeHero">
                <div className="homeHeroContent">
                    <div className="homeHeroBadge">🎮 All Platforms. One Place.</div>
                    <h1 className="homeHeroTitle">
                        Find Your Next<br />
                        <span className="homeHeroAccent">Favourite Game</span>
                    </h1>
                    <p className="homeHeroSub">
                        Browse {games.length}+ titles across Steam, PlayStation, Xbox and Nintendo — compare prices, check ratings, and jump straight to the store.
                    </p>

                    {}
                    <div className="homeSearchRow">
                        <div className="homeSearchWrapper">
                            <span className="homeSearchIcon">🔍</span>
                            <input
                                type="text"
                                className="homeSearchInput"
                                placeholder="Search all games…"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                autoFocus
                            />
                            {search && (
                                <button className="homeSearchClear" onClick={() => setSearch("")}>✕</button>
                            )}
                        </div>
                    </div>

                    {}
                    {search.trim() && (
                        <div className="homeSearchResults">
                            {searchResults.length === 0 ? (
                                <p className="homeSearchEmpty">No games found for "{search}"</p>
                            ) : (
                                <>
                                    <p className="homeSearchCount">{searchResults.length} result{searchResults.length !== 1 ? "s" : ""}</p>
                                    <div className="homeSearchGrid">
                                        {searchResults.map(game => (
                                            <GameCard key={game.id} game={game} />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {}
            {!search.trim() && (
                <>
                    <section className="homeSection">
                        <div className="homeSectionInner">
                            <h2 className="homeSectionTitle">Browse by Platform</h2>
                            <div className="platformGrid">
                                {platforms.map(p => (
                                    <Link
                                        key={p.name}
                                        to={p.path}
                                        className="platformCard"
                                        style={{
                                            background: p.bg,
                                            borderColor: p.border,
                                        }}
                                    >
                                        <span className="platformCardIcon">{p.icon}</span>
                                        <span className="platformCardName" style={{ color: p.color }}>{p.name}</span>
                                        <span className="platformCardCount">{p.count} games</span>
                                        <span className="platformCardArrow" style={{ color: p.color }}>→</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>

                    {}
                    <section className="homeSection">
                        <div className="homeSectionInner">
                            <div className="homeSectionHeader">
                                <h2 className="homeSectionTitle">⭐ Top Pick Per Platform</h2>
                                <p className="homeSectionSub">The highest-rated game from each store</p>
                            </div>
                            <div className="featuredGrid">
                                {featured.map(game => (
                                    <GameCard key={game.id} game={game} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {}
                    <section className="homeSection">
                        <div className="homeSectionInner">
                            <div className="homeSectionHeader">
                                <h2 className="homeSectionTitle">🔥 Top Rated Right Now</h2>
                                <p className="homeSectionSub">Best scores across all platforms</p>
                            </div>
                            <div className="topPicksGrid">
                                {topPicks.map(game => (
                                    <GameCard key={game.id} game={game} />
                                ))}
                            </div>
                        </div>
                    </section>

                    {}
                    <section className="homeSection">
                        <div className="homeSectionInner">
                            <Link to="/equipment" className="equipCta">
                                <div className="equipCtaText">
                                    <span className="equipCtaBadge">New</span>
                                    <h3>Level up your setup</h3>
                                    <p>Browse top-rated headsets, mice, keyboards, monitors and more.</p>
                                </div>
                                <span className="equipCtaArrow">🎧 Shop Equipment →</span>
                            </Link>
                        </div>
                    </section>
                </>
            )}

            <Footer />
        </div>
    );
}

export default Home;
