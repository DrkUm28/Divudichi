import React from 'react'
import Hero from '../../../SharedComponents/Hero'
import Banner from '../../../SharedComponents/Banner'
import {Link} from 'react-router-dom'
import OpcionesView from '../../../SharedComponents/OpcionesView'
import TituloOpciones from '../../../SharedComponents/TituloOpciones'
import axios from 'axios'
import { Component } from 'react'

export default class AgregaEspecialidad extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            nombre:'',
            ingredientes:'',
            precio:'',
            detalle:''
        }
    }

    changeHandler =(e) =>{
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler =(e)=>{
        e.preventDefault();
        console.log(this.state);

        /*aca se esta generando el post request al api, como primer parametro se le pasara la url del api
        y como segundo parametro se le pasan los datos que se quieran mandar al api, por lo que se le pasa el current
        state*/
        axios.post('url', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }

    render() {
        const {nombre, ingredientes, precio ,detalle } = this.state;
        return (
            <>
                <Hero hero = "restaurantHero">
                        <Banner title = "Agregar platillo de comida"
                                subtitle = "Por favor ingrese todos los campos">
                            <Link to = "/especialidades" className = "btn-primary">
                                Volver 
                            </Link>
                        </Banner>
                </Hero>
                <br/>
                <div className ="formulario">
                    <form className="form-horizontal" onSubmit={this.submitHandler}>
                        <fieldset>
                            <legend> Nuevo Platillo </legend>
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="codigo">Codigo </label>  
                                    <div className="col-md-4">
                                        <input id="codigo" name="codigo" type="text" placeholder="" className="form-control input-md" required="" disabled/>
                                    </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="nombre">Nombre</label>  
                                <div className="col-md-4">
                                    <input id="nombre" 
                                        name="nombre" 
                                        type="text" 
                                        placeholder="" 
                                        className="form-control input-md" 
                                        required=""
                                        value = {nombre} 
                                        onChange={this.changeHandler}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="ingredientes">Ingredientes</label>  
                                    <div className="col-md-4">
                                        <input id="ingredientes" 
                                        name="ingredientes" 
                                        type="text" 
                                        placeholder="" 
                                        className="form-control input-md" 
                                        required=""
                                        value = {ingredientes} 
                                        onChange={this.changeHandler}/>
                                    </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="precio">Precio</label>  
                                    <div className="col-md-4">
                                        <input id="precio" 
                                        name="precio" 
                                        type="text" 
                                        placeholder="" 
                                        className="form-control input-md" 
                                        required=""
                                        value = {precio} 
                                        onChange={this.changeHandler}/>
                                    </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-4 control-label" htmlFor="detalle">Detalle</label>  
                                    <div className="col-md-4">
                                        <textarea id="detalle" 
                                        name="detalle" 
                                        type="text" 
                                        placeholder="" 
                                        className="form-control input-md" 
                                        required=""
                                        value = {detalle} 
                                        onChange={this.changeHandler}/>  
                                    </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-8">
                                    <button id="salvar" name="salvar" className="btn btn-success">Salvar</button>
                                    <button id="cancelar" name="cancelar" className="btn btn-danger"> Cancelar</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </>
        )
    }
}
