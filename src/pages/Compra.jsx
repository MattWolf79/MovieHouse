import "../pages/Compra.css";

export const Compra = () => {
  return (
    <div className="comprar">
      <div className="compra-item">
        <div className="compra-nombre">
      <p>Nombre</p>
      <input className="input-icon" type="text" placeholder="Ingrese Nombre" />{" "}
      </div>
      <div  className="compra-nombre">
      <p>Apellido</p>
      <input className="input-icon" type="text" placeholder="Ingrese Apellido" />{" "}
      </div>
      <div  className="compra-nombre">
      <p>Email</p>
      <input className="input-icon" type="text" placeholder="Ingrese Email" />{" "}
      </div>
      <div  className="compra-nombre">
      <p>Telefono</p>
      <input className="input-icon" type="text" placeholder="Ingrese Celular" />{" "}
      </div>
      
      </div>
      <div className="btn-compra">
      <button  style={{
                        
                        padding: "10px",  
                        background: "grey",
                        margin: "5px 5px",
                      }}>CONFIRMAR COMPRA</button>
      </div>
    </div>
  );
};
