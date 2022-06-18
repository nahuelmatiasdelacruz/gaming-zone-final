import './css/App.css';
import NavBar from "./components/NavBar.js";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';
import Footer from './components/Footer';
import Header from './components/Header';
import Order from './components/Order';

const App = () => {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categories/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<Order/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}

export default App;
