// import Banner from './components/Banner/Banner';
// import { Item } from "./components/Item/Item.jsx";
import  NavBar from "./components/NavBar/NavBar.jsx";
import {Detail } from "./pages/Detail";
import {Home} from "./pages/Home";
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements  } from 'react-router-dom';

const routes = createBrowserRouter(
  createRoutesFromElements(
     
    <Route element={<NavBar />}>
      <Route path="/" element={<Home />}/>
      <Route path="/Item/:id" element={<Detail />}/>
      </Route>
  )
  
  );

function App() {  
  return (   
      <div className="App">
       
    <RouterProvider router={routes}/>
    </div>

  )
}
export default App
