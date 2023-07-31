import { useState, useEffect } from "react";
import { searchMovie } from "../../movie/ProductMovies";
import "./SearchMovie.css";
import {FaSearch} from "react-icons/fa";



export const SearchMovie = () => {
  const [busqueda, setBusqueda] = useState("");
  const [movie, setMovie] = useState([]);

  // const fetchData = (value)=>{
  //   fetch("https://jsonplaceholder/typicode.com/users").then((response)=>response.json()).then(json=>{
  //       console.log(json);
  //   });
  //  };


  const handleChange = (e) => {
    setBusqueda(e.target.value);
    console.log(e.target.value);
  };



  // const showData  =async ()=>{
  //   const response=await fetch(URL)
  //   const data=await response.json
  //   console.log(data)
  // }

  // showData();

  useEffect(() => {
    searchMovie(busqueda.toLowerCase()).then((res) => {
      setMovie(res);
      console.log(res);
    });
  }, [busqueda]);

  return (
    <div className="input-wrapper" display="none" >
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
