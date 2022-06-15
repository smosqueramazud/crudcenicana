import React from 'react';
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {datosCargados: false, // creo un estado que va a estar cambiando
            empleados: [] //creo un arreglo
        } 
    }

    cargarDatos(){

        fetch("http://localhost/empleados/")  //consumo la api
        .then(respuesta =>respuesta.json()) //la respuesta la recibo en formato json
        .then((datosRespuesta)=>{ 
            console.log(datosRespuesta); // y almaceno la respuesta en la variable datosRespuesta
            this.setState({datosCargados:true, empleados:datosRespuesta});
        }) 
        .catch(console.log) // si falla imprima los errores
    }
    
    componentDidMount(){
        this.cargarDatos();
    }

    render() { 

        const{datosCargados, empleados}=this.state //asigno los valores en el render
        if(!datosCargados){
            return(<div>Cargando...</div>);
        }else{
            return ( 

                <div className="card">
                    <div className="card-header">
                    <Link className="btn btn-success" to={"/create"}>Agregar nuevo empleado</Link>
                    </div>
                    <div className="card-body">
                        <h4>Lista de empleados</h4>  
                        <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        empleados.map(
                            (empleado)=>(
                                <tr key={empleado.id}>
                                <td>{empleado.id}</td>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.correo}</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="">
                                        <Link className="btn btn-warning" to={"/editar"}>Editar</Link>
                                        <button type="button" className="btn btn-danger">Borrar</button>
                                    </div>
                                </td>
                                </tr>
                            )
                        )
                    }
                    

                </tbody>
            </table>

                    </div>
                    <div className="card-footer text-muted">
                       
                    </div>
                </div>
                
            );
        }
    }
}
 
export default List;