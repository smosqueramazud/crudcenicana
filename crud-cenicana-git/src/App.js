 import './App.css';
import List from "./components/list";
import Create  from "./components/Create";
import Editar  from "./components/Editar";
import Home  from "./components/Home";

import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
              
                <Link className="nav-item nav-link active" to={"/"}>Home <span className="sr-only">(current)</span></Link>
                <Link className="nav-item nav-link" to={"/create"}>Agregar Libro</Link>
                <Link className="nav-item nav-link" to={"/editar"}>Agregar Articulo</Link>
            </div>
        </nav>
      <div className="container"> 
        <br></br>
        
        <Routes><Route exact path="/"  element={<Home />}></Route></Routes>
        <Routes><Route path="/create"  element={<Create />}></Route></Routes>
        <Routes><Route path="/editar/:id"  element={<Editar />}></Route></Routes> {/* recibo el dato con :id */}
        
      </div>
    </Router>

  );
}

export default App;
