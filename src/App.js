
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <NavBar />
    <Routes>

      <Route path = '/' element = {<ItemListContainer greetings="Nuestro catálogo" />}   />

      <Route path='/category/:catID' element={ <ItemListContainer greetings={"Categoria"} /> }  />

      <Route path='/product/:itemID' element={<ItemDetailContainer />}  />

    </Routes>  
    </div>
  );
}

export default App;
