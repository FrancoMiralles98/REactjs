
import './App.css';
import Menu from './Componentes/NavBar.js/NavBar';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <ItemListContainer  productos='Aca irian los productos'/>
    </div>
  );
}

export default App;
