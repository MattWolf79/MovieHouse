
export const Paginacion = (prev, next, onAnterior, onSiguiente) => {

    const funAntes = () =>  {
        onAnterior()

    }

    const funSiguiente = () => {
        onSiguiente()
    }

  return (
    <nav >        
        <div  >
            {
             prev ?  ( 
                <button className="page-link" onClick={funAntes} >Anterior</button>
            ) : null}
            {
             next ? (
                <button className="page-link" onClick={funSiguiente}>Siguiente</button>
            
            ) : null}
        </div>      
    </nav>
  )
}

