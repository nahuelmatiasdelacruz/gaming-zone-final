import './css/App.css';
import NavBar from "./components/Main/NavBar.js";
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartContextProvider from './components/Cart/CartContext';
import Footer from './components/Main/Footer';
import Header from './components/Main/Header';
import Order from './components/Main/Order';
import Search from "./components/Main/Search";

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
            <Route path="/search/:value" element={<Search/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
