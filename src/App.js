
import './App.css';
import CartContextProvider from './context/CartContext';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <CartContextProvider>
    <NavBar />
    <Routes>

      <Route path = '/' element = {<ItemListContainer greetings="Nuestro catálogo" />}   />

      <Route path='/category/:catID' element={ <ItemListContainer greetings={"Categoria"} /> }  />

      <Route path='/product/:itemID' element={<ItemDetailContainer />}  />

      <Route path='/cart' element={<Cart />} />

    </Routes>  
    </CartContextProvider>
    </div>
  );
}

export default App;
