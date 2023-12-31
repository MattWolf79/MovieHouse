import { useState, useEffect } from "react";
import { searchMovie } from "../../movie/ProductMovies";
import "./SearchMovie.css";
import {FaSearch} from "react-icons/fa";



export const SearchMovie = () => {
  const [busqueda, setBusqueda] = useState("");
  const [movie, setMovie] = useState([]);

   const handleChange = (e) => {
    setBusqueda(e.target.value);
  };


  useEffect(() => {
    searchMovie(busqueda.toLowerCase()).then((res) => {
      setMovie(res);
    });
  }, [busqueda]);

  return (
    <div className="input-wrapper" display="none" style={{
      padding: "10px",
      alignItems:"end",
      margin: "10px 0",
    }}>
      <form className="form-input" onSubmit={setMovie}>
        
        <input
        
          className="input-icon"
          type="text"
          placeholder="Busca Aquí tu película"          
          onChange={handleChange}
        />
        <FaSearch id="search-icon" />
      </form>
    </div>
  );
};
