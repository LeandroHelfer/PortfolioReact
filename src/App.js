import Navbar from "./componentes/navbar/Navbar";
import Central from "./componentes/Central/Central";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <main>
        <Central></Central>
      </main>
    </div>
  );
}

export default App;
