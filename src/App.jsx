import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a ValaSports. Somos Expertos en Pádel"} />
    </>
  );
}

export default App;

// nota: mantener nombre en mayus App.jsx