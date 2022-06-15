import React from 'react';

import { useParams } from "react-router-dom";


class Editar extends React.Component {
    constructor(props) {
        super(props);
        
    }
    state = {  }

    getProduct = () =>{
        console.log(this.props.match.params.id);
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item.id === this.props.match.params.id
            })
            this.setState({product: data})
        }};

    componentDidMount(){
        
    }

    render() { 
        return ( <div className="card">
            <div className="card-header">
                Editar Empleados
            </div>
            <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
            </div>
            <div className="card-footer text-muted">
                Footer
            </div>
        </div> );
    }
}
 
export default Editar;