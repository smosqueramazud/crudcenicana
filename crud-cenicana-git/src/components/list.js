import React from 'react';
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {datosCargados: false, // creo un estado que va a estar cambiando
            empleados: [] //creo un arreglo
        } 
    }

    eliminarRegistro = (id) => {
        console.log(id);

        fetch("http://localhost/empleados/?borrar="+id)  //consumo la api y le paso el parametro id
        .then(respuesta =>respuesta.json()) //la respuesta la recibo en formato json
        .then((datosRespuesta)=>{ 
            console.log(datosRespuesta); // y almaceno la respuesta en la variable datosRespuesta
            this.cargarDatos(); //cargamos nuevamente la tabla
        }) 
        .catch(console.log) // si falla imprima los errores 
    }


    cargarDatos(){

        fetch("http://localhost/empleados/")  //consumo la api
        .then(respuesta =>respuesta.json()[0]) //la respuesta la recibo en formato json
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
                    <Link className="btn btn-success" to={"/create"}>Agregar nuevo autor</Link>
                    </div>
                    <div className="card-body">
                        <h4>Lista de autores</h4>  
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
                                        <Link className="btn btn-warning" 
                                        to={"/editar/"+ empleado.id}>Editar</Link> {/* envio el parametro id en la url */}
                
                                        <button type="button" className="btn btn-danger" 
                                        onClick={()=>this.eliminarRegistro(empleado.id)}>Borrar</button>
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