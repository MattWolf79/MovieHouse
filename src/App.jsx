import { CartProvider } from "./State/Cart.context.jsx";
import  NavBar from "./components/NavBar/NavBar.jsx";
import { Category } from "./pages/Category";
import {Detail } from "./pages/Detail";
import {Home} from "./pages/Home";
import { Cart } from "./pages/Cart";
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom';

const routes = createBrowserRouter(
  createRoutesFromElements(
     
    <Route element={<NavBar />}>
      <Route path="/" element={<Home />}/>
      <Route path="/Item/:id" element={<Detail />}/>      
      <Route path="/category/:id" element={<Category />}/>  
      <Route path="/cart" element={<Cart />} />
      </Route>
  )
  
  );

function App() {  
  return (   
      <div className="App">
        <CartProvider>
            <RouterProvider router={routes}/>
        </CartProvider>
    </div>

  )
}
export default App
