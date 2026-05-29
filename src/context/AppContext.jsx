import { createContext, useContext, useState} from "react";

const AppContext = createContext();

export function AppProvider({children}){
    const[cart, setCart] = useState([]);
    const[favorites, setFavorites]=useState([]);

    function addToCart(game){
        setCart(prev => {
            const existing = prev.find(item=>item.id===game.id);
            if(existing){
                return prev.map(item =>
                    item.id === game.id
                        ?{...item, quantity: item.quantity+1}
                        :item
                );
            }
            return[...prev,{...game, quantity:1}];
        });
    }

    function removeFromCart(gameId){
        setCart(prev=>prev.filter(item=>item.id!==gameId))

    }

    function toggleFavorite(game){
        setFavorites(prev=>{
            const exists = prev.find(fav=>fav.id===game.id);
            if(exists) return prev.filter(fav=>fav.id!==game.id);
            return[...prev,game];
        });
    }

    function isFavorite(gameId){
        return favorites.some(fav=>fav.id===gameId);
    }

    return(
        <AppContext.Provider value={{
            cart,addToCart,removeFromCart,favorites,toggleFavorite,isFavorite
        }}>
            {children}
        </AppContext.Provider>
    );
}
export function useApp(){
    return useContext(AppContext);
}