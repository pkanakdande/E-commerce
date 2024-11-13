import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Nav from './components/Nav';
import Product from './components/Product';
import Cart from './components/Cart';
function App() {
  return (
    <>
  <BrowserRouter>
<Nav/>

  <Routes>
  <Route path='/' element={<Product/>}/> 
  <Route path='/cart' element={<Cart/>}/> 

<Route path='/cart' element={<Cart/>}/> 
</Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
