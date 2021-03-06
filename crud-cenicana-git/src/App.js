import './App.css';
import List from "./components/list";
import Create  from "./components/Create";
import Editar  from "./components/Editar";

import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
              
                <Link className="nav-item nav-link active" to={"/"}>Sistema <span className="sr-only">(current)</span></Link>
                <Link className="nav-item nav-link" to={"/create"}>Crear Empleado</Link>
                <Link className="nav-item nav-link" to={"/editar"}>Editar Empleado</Link>
            </div>
        </nav>
      <div className="container">
        <br></br>
        
        <Routes><Route exact path="/"  element={<List />}></Route></Routes>
        <Routes><Route path="/create"  element={<Create />}></Route></Routes>
        <Routes><Route path="/editar"  element={<Editar />}></Route></Routes>
        
      </div>
    </Router>

  );
}

export default App;
