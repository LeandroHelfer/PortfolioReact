import Navbar from "./componentes/navbar/Navbar";
import Central from "./componentes/Central/Central";
import Rodape from "./componentes/Rodape/Rodape";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
        <Central></Central>
      </main>
      <footer>
        <Rodape></Rodape>
      </footer>
    </div>
  );
}

export default App;
