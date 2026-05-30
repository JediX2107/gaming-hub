import{useApp}from"../context/AppContext";
import"./GameCard.css";

function GameCard({game}){
    const{addToCart, toggleFavorite, isFavorite}=useApp();
    const favorited=isFavorite(game.id);

    const discountedPrice=game.discount
        ?(game.price*(1-game.discount/100)).toFixed(2)
        : null;

    return(
        <div className="gameCard">
            <div className="gameCardImageWarp">
                <img 
                    src={game.image}
                    alt={game.title}
                    onError={e=>{
                       e.target.src = `https://via.placeholder.com/400x180/1c2541/ffffff?text=${encodeURIComponent(game.title)}`; 
                    }}
                />
                {game.discount &&(
                    <span className="discountBadge">-{game.discount}%</span>
                )}
                {game.gamepass &&(
                    <span className="gamepassBadge">Game Pass</span>
                )}

                <button
                    className={'fav-btn ${favorited ? "favorited":""}'}
                    onClick={()=>toggleFavorite(game)}
                    title={favorited ? "Remove from favorites" : "Add to favorites"}
                    >
                        {favorited ? "❤️" : "🤍"}
                    </button>
            </div>

            <div className="gameCardInfo">
                <div className="gameCardTitle">{game.title}</div>
                <div className="gameCardMeta">
                    <span className={'platformTag ${game.platform.toLowerCase()}'}>
                        {game.platform}
                    </span>
                    <span className="genreTag">{game.genre}</span>
                </div>
                <div className="gameCardPrice">
                    {discountedPrice ? (
                        <>
                            <span className="priceOrginal">${game.price.toFixed(2)}</span>
                            <span className="priceSale">${discountedPrice}</span>
                        </>
                    ):(
                        <span>${game.price.toFixed(2)}</span>
                    )}
                </div>
                <div className="gameCardActions">
                    <a
                        href={game.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="viewBtn"
                    >
                       🎮 View Store 
                    </a>
                    <button
                        className="cartBtn"
                        onClick={()=>addToCart(game)}
                    >
                       🛒 Add to Cart 
                    </button>
                </div>
            </div>
        </div>
    );
}
export default GameCard;