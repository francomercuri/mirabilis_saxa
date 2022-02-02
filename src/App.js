
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Lista de Items" SegundaProp="Se completará próximamente"/>
    </div>
  );
}

export default App;
