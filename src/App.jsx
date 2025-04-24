import "./css/App.css";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import { MovieProvider } from "./contexts/movieContext";
import NavBar from "./Components/NavBar";
//import MovieCard from "./Components/MovieCard";
// import {Routes,Route} from "react-router-dom"
// import { BrowserRouter as  Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const movieNumber = 2;
  return (
    <>
      <MovieProvider>
        <div>
          <NavBar />
        </div>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}

export default App;
