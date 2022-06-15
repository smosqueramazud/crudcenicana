import React from 'react';
import { Link } from "react-router-dom";
import {  } from "react-router-dom";

class Create extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    state = { 
        nombreLibro: "",
        nombreAutor: "",
        fechaPubli: ""
     }

     cambioValor = (e) => { //se ejecuta cuando el valor del input cambia
        const state = this.state; //almacena la informacion qe se esta modificando
        state[e.target.name] = e.target.value; //todo lo que me envien lo vuelvo asignar
        this.setState({state}); //se asignan los valores que el usuario ingreso
     }

    enviarDatos = (e) => { //el e nos ayuda a la interaccion con los datos
        e.preventDefault();
        console.log("Formulario enviado"); 

        const{nombreLibro, nombreAutor, fechaPubli}= this.state

        console.log(nombreLibro);
        console.log(nombreAutor);
        console.log(fechaPubli);

        var datosEnviar = {nombre_libro: nombreLibro, nombre_autor: nombreAutor, fecha_publicacion: fechaPubli}
        console.log(datosEnviar);

        fetch("http://localhost/empleados/?insertar=1",{
            method:"POST",
            body:JSON.stringify(datosEnviar) //consumo el servicio de insertar a traves del metodo post y pasando datosEnviar como valores (request)
        }) 
        .then(respuesta =>respuesta.json()) 
        .then((datosRespuesta)=>{ 
            console.log(datosRespuesta);
            window.location.replace("/");
        }) 
        .catch(console.log) // si falla imprima los errores
    }


    render() { 
        const{nombreLibro, nombreAutor, fechaPubli}= this.state //asigno los valores en el render


        return ( 
            <div className="card">
                <div className="card-header">
                    Libros
                </div>
                <div className="card-body">
                    <form onSubmit={this.enviarDatos}>

                        <div className="form-group">
                          <label htmlFor="">Nombre del libro:</label>
                          <input type="text" name="nombreLibro" onChange={this.cambioValor} value={nombreLibro} id="nombreLibro" className="form-control" placeholder="" aria-describedby="helpId" />
                          <small id="helpId" className="text-muted">Escribe el nombre del Libro</small>
                        </div>
                        <br></br>
                        <div className="form-group">
                          <label htmlFor="">Nombre del autor:</label>
                          <input type="text" name="nombreAutor" onChange={this.cambioValor} value={nombreAutor} id="nombreAutor" className="form-control" placeholder="" aria-describedby="helpId" />
                          <small id="helpId" className="text-muted">Escribe el nombre del autor</small>
                        </div>
                        <br></br>
                        <div className="form-group">
                          <label htmlFor="">Fecha de Publicación:</label>
                          <input type="text" name="fechaPubli" onChange={this.cambioValor} value={fechaPubli} id="fechaPubli" className="form-control" placeholder="" aria-describedby="helpId" />
                          <small id="helpId" className="text-muted">Escribe la fecha de Publicación</small>
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