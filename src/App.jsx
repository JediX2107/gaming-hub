import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Home from "./pages/Home";
import Steam from "./pages/Steam";
import PlayStaion from "./pages/PlayStaion";
import Xbox from "./pages/Xbox";
import Nintendo from "./pages/Nintendo";
import Equipment from "./pages/Equipment";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import "./App.css";

function App(){
  return(
    <AppProvider>
      <Router>
        <Route path="/"   element={<Home />}/>
        <Route path="/steam"   element={<Steam />}/>
        <Route path="/playStaion"   element={<PlayStaion />}/>
        <Route path="/xbox"   element={<Xbox />}/>
        <Route path="/nintendo"   element={<Nintendo />}/>
        <Route path="/equipment"   element={<Equipment />}/>
        <Route path="/favorites"   element={<Favorites />}/>
        <Route path="/cart"   element={<Cart />}/>
        <Route path="/login"   element={<Login />}/>
      </Router>
    </AppProvider>
  );
}
export default App;