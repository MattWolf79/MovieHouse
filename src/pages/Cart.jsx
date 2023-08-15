import { useState } from "react";
import { useCartContext } from "../State/Cart.context";
import { addOrder } from "../movie/order.request";
import { updateManyMovies } from "../movie/ProductMovies";
import { Loader } from "../components/Loader/Loader";
import "../js/formulario.css";

const inputs = document.querySelectorAll("#formulario input");

const initialForm = {
  nombre: "",
  email: "",
  email2: "",
  telefono: "",
};



let styles = {
  fontWeigth: "bold",
  color: "#dc3545",
};

const validarFormulario = (initialForm, form) => {
  let ExpreNombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  let ExpreEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  let ExpreTelefono = /^\d{7,10}$/;
  let errors = {};

  inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
  });

  if (!form.nombre.trim()) {
    errors.nombre = "El valor es requerido";
  } else if (!ExpreNombre.test(form.nombre.trim())) {
    errors.nombre = "El campo nombre solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El valor es requerido";
  } else if (!ExpreEmail.test(form.email.trim())) {
    errors.email = "El formato de correo no es válido";
  }

  if (!form.telefono.trim()) {
    errors.telefono = "El valor es requerido";
  } else if (!ExpreTelefono.test(form.telefono.trim())) {
    errors.telefono =
      "El telefono solo puede contener numeros y el maximo son 10 dígitos.";
  }

  if (form.email.trim() != form.email2.trim()) {
    errors.email2 = "Ambos correos deben ser iguales.";
  }
  return errors ;
};

export const Cart = () => {
  const { cart, limpiarCart, getTotalPrice, borrarCart} = useCartContext();
  const [active, setActive] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  // useState para la orden
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");

  const createOrder = async () => {
    const items = cart.map(({ id, title, cantidad, price }) => ({
      id,
      title,
      cantidad,
      price,
    }));

    const order = {
      buyer: { nombre, telefono, email, email2 },
      items,
      total: getTotalPrice,
    };

    const id = await addOrder(order);
    alert("Tu orden de compra tiene el número: " + id);

    await updateManyMovies(items); //NO es obligatorio

    limpiarCart();
  };

  
  const handleChange = ({ target: { value, name } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  
    const newErrors = validarFormulario(initialForm, {
      ...form,
      [name]: value,
    });
  
    setError(newErrors);
  
    const isValid = Object.values(newErrors).every(error => !error);
    setFormIsValid(isValid);
    
  };

  const handleBlur = (e) => {
    e.preventDefault();
    handleChange(e);
 


  };

  return (
    <div className="container-icon">
      <div
        className="container-cart-icon"
        onClick={() => setActive(!active)}
      ></div>
      {cart.length ? (
        <>
          {cart.map((Item) => (
            <ul
              className="cart-product"
              key={Item.id}
              style={{ background: "#eae4e4" }}
            >
              <img src={Item.img} className="item__img_cart" />
              <h2 className="titulo-producto-carrito">{Item.title}</h2>
              <h3 className="precio-producto-carrito">${Item.price}</h3>
              <h4 className="count-products">
                {" "}
                Cantidad
                <span style={{ padding: "10px", margin: "10px 0" }}>
                  {Item.cantidad}
                </span>
              </h4>

              <button
                className="bi bi-trash3"
                style={{
                  padding: "10px",
                  background: "orange",
                  margin: "10px 0",
                }}
                key={Item.id}
                onClick={() => borrarCart(Item.id)}
                alt="Quitar del carrito"
              ></button>
            </ul>
          ))}

          <div
            className="cart-total"
            style={{
              background: "orange",
            }}
          >
            <h3>
              Total a pagar: ${" "}
              {getTotalPrice.toLocaleString("es-CO", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </h3>
            <button className="btn-clear-all" onClick={limpiarCart}>
              Vaciar Carrito
            </button>
          </div>
          <div className="formulario">
            <div className="formulario__grupo" id="grupo__nombre">
              <label className="formulario__label">Nombre</label>
              <div className="formulario__grupo-input">
                <input
                  type="text"
                  className="formulario__input"
                  name="nombre"
                  id="nombre"
                  placeholder="Mi Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  onBlur={handleBlur}
                />
              </div>

              <div className="">
                <p className="formulario__input-error" style={styles}>
                  {errors.nombre}
                </p>
                {/* <i className="bi bi-check-circle-fill" /> */}
              </div>
            </div>
            <div className="formulario__grupo" id="grupo__telefono">
              <label className="formulario__label">Teléfono</label>
              <div className="formulario__grupo-input">
                <input
                  type="text"
                  className="formulario__input"
                  name="telefono"
                  id="telefono"
                  value={telefono}
                  placeholder="4491234567"
                  onChange={(e) => setTelefono(e.target.value)}
                  onBlur={handleBlur}
                />
                <i className="formulario__validacion-estado fas fa-times-circle"></i>
              </div>
              <p className="formulario__input-error" style={styles}>
                {errors.telefono}
              </p>
            </div>
            <div className="formulario__grupo" id="grupo__correo">
              <label className="formulario__label">Correo Electrónico</label>
              <div className="formulario__grupo-input">
                <input
                  type="email"
                  className="formulario__input"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="correo@correo.com"
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleBlur}
                />
                <i className="formulario__input-error"></i>
              </div>
              <p className="formulario__input-error" style={styles}>
                {errors.email}
              </p>
            </div>

            <div className="formulario__grupo" id="grupo__correo">
              <label className="formulario__label">Repetir Correo</label>
              <div className="formulario__grupo-input">
                <input
                  type="email"
                  className="formulario__input"
                  name="email2"
                  id="email2"
                  value={email2}
                  placeholder="Repetir correo"
                  onChange={(e) => setEmail2(e.target.value)}
                  onBlur={handleBlur}
                />
                <i className="formulario__input-error"></i>
              </div>
              <div>
                <p className="formulario__input-error" style={styles}>
                  {errors.email2}
                </p>
              </div>
            </div>

            <div className="formulario__grupo formulario__grupo-btn-enviar">
              <p className="formulario__input-error"></p>

              <button
                type="submit"
                className="formulario__btn"
                onClick={createOrder}
                disabled={!formIsValid} // Aquí se deshabilita si el formulario no es válido
              >
                Confirmar Compra
              </button>
              
              <p
                className="formulario__mensaje-exito"
                id="formulario__mensaje-exito"
              >
                {setLoading && <Loader />}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="banner">
          <p className="banner-container" style={{ background: "grey" }}>
            El carrito está vacío
          </p>
        </div>
      )}
    </div>
  );
};
