import "./NavBar.css";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Carrito from "../Carrito/Carrito";
// captura el state para, en un futuro, hacer que las opciones de menú estén dentro del botón
const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <nav className="NavBar">
        <NavLink to="/">
          <img className="NavBarLogo" src={"../src/img/logoCata.png"} />
        </NavLink>
        {/*  <--! buscador de videos--!> */}
        <div>
          <div>
          <input
              className="NavBar-text"
              type="search"
              placeholder="Busca tu pelicula aquí"
              aria-label="Search"
            />
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              width="16px"
              height="16px"
            >
              Buscar
            </button>
            
          </div>
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

            <div className="container">
              <div className="dropdown" color="green">
                <button
                  className="btn btn-default dropdown-toggle btn-lg"
                  type="button"
                  data-toggle="dropdown"
                >
                  Genero
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to={"/category/terror"}>Terror</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/category/aventura"}>Aventura</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/category/accion"}>Accion</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/category/accion"}>Drama</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            
          </nav>
          
        </nav>
        <nav className="NavBar-li">
          <a href="#">Ayuda</a>
        </nav>

        
        <div className="Carrito">
          <a href="#"></a> <Carrito />{" "}
        </div>
        <button className="btn btn-secondary btn-lg">
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
