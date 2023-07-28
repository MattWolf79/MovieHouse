import "./NavBar.css";
import { useState,useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {Carrito} from "../Carrito/Carrito";
import { useParams } from "react-router-dom";
import { getMovie } from "../../movie/ProductMovies";
import { SearchMovie } from "../SearchComponent/SearchMovie";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  // const [busqueda,setBusqueda] = useState("");
  // const [movie,setMovie] = useState([]);
  // const {id} = useParams();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  // const searcher=e=>{
  //   setBusqueda(e.target.value);
  //   console.log(e.target.value);
  //   // filtrar(e.target.value);
  // }

  // const filtrar=(terminoBusqueda)=>{
  //   let resultado=[];
  //   var resultadoBusqueda=movie.filter((elemento)=>{
  //     if(elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
  //       return elemento; 
  //     }
  //   });
  //   setMovie(resultadoBusqueda);
  // }

  // useEffect(() => {
  //   getMovie(+id).then((res) => {
  //     setMovie(res); 
  //   });
  // }, [id]);




  return (



    <div>
      <nav className="NavBar">
        <NavLink to="/">
          <img className="NavBarLogo" src={"../src/img/logoCata.png"} />
        </NavLink>
        {/*  <--! buscador de videos--!> */}
        <div>
          
        </div>
        <div>
          <SearchMovie/>
        </div>  
        {/* botón para el menú, que debería contenet los li  */}
        <nav className={`Cabecera-nav ${menu ? "isActive" : ""}`}>
          <button onClick={toggleMenu} className="Cabecera-button">
            <svg
              className="Cabecera-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          <nav className="NavBar-ul">
            <NavLink to="/">
              <nav className="NavBar-li">Inicio</nav>
            </NavLink>

            <div className="NavBar-ul">
              <div className="dropdown" color="green">
                <li
                  className="btn btn-default dropdown-toggle btn-lg"
                  type="button"
                  data-toggle="dropdown"
                >
                  Genero
                  <span className="caret"></span>
                </li>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to={"/category/terror"}>Terror</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/category/aventura"}>Aventuras</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/category/accion"}>Accion</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/category/drama"}>Dramas</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/category/fantasia"}>Fantasias</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/category/animada"}>Animadas</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/category/comedia"}>Comedias</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/category/novela"}>Novelas</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/category/policial"}>Policiales</NavLink>
                  </li>
                 
                </ul>
                
              </div>
            </div>
            
            
          </nav>
          
          
        </nav>
        <div>   
                <nav className="NavBar-li"><a href="#">Ayuda</a></nav>
                
                </div>

        
        <div className="Carrito">
          <a href="#"></a> <Carrito />{" "}
        </div>
        <button className="btn btn-secondary btn-lg-hamburg">
          <svg
            className="NavBar-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="16px"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
      </nav>
      <Outlet />
    </div>
  );
};
export default NavBar;
