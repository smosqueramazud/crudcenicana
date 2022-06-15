import React from 'react';
import { Link } from "react-router-dom";

class Create extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    state = { 
        nombre: "",
        correo: ""
     }

     cambioValor = (e) => { //se ejecuta cuando el valor del input cambia
        const state = this.state; //almacena la informacion qe se esta modificando
        state[e.target.name] = e.target.value; //todo lo que me envien lo vuelvo asignar
        this.setState({state}); //se asignan los valores que el usuario ingreso
     }

    enviarDatos = (e) => { //el e nos ayuda a la interaccion con los datos
        e.preventDefault();
        console.log("Formulario enviado"); 

        const{nombre, correo}= this.state

        console.log(nombre);
        console.log(correo);
    }


    render() { 
        const{nombre, correo}= this.state //asigno los valores en el render


        return ( 
            <div className="card">
                <div className="card-header">
                    Empleados
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatos}>

                        <div className="form-group">
                          <label htmlFor="">Nombre:</label>
                          <input type="text" name="nombre" onChange={this.cambioValor} value={nombre} id="nombre" className="form-control" placeholder="" aria-describedby="helpId" />
                          <small id="helpId" className="text-muted">Escribe el nombre del empleado</small>
                        </div>
                        <br></br>
                        <div className="form-group">
                          <label htmlFor="">Correo:</label>
                          <input type="text" name="correo" onChange={this.cambioValor} value={correo} id="correo" className="form-control" placeholder="" aria-describedby="helpId" />
                          <small id="helpId" className="text-muted">Escribe el correo del empleado</small>
                        </div>
                        <br></br>
                        <br></br>
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Agregar nuevo empleado</button>
                            <Link to={"/"} className="btn btn-primary">Cancelar</Link>
                        </div>

                    </form>

                </div>
                <div className="card-footer text-muted">
                    
                </div>
            </div>
         );
    }
}
 
export default Create;