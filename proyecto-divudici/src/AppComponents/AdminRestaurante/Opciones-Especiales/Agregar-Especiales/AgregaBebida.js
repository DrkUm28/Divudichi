import React from 'react'
import Hero from '../../../SharedComponents/Hero'
import Banner from '../../../SharedComponents/Banner'
import {Link} from 'react-router-dom'
import OpcionesView from '../../../SharedComponents/OpcionesView'
import TituloOpciones from '../../../SharedComponents/TituloOpciones'
import axios from 'axios' 
import { Component } from 'react'

export default class AgregaBebida extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            cod_bebida: '19',
            nombre:'',
            tipo:'',
            nacionalidad: '',
            marca: '',
            precio_unitario:'',
            precio_botella: '',
            cantidad: '',
            anio_cosecha: '',
            descripcion:'',
            proveedor: '',
            restaurante: '1'
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
        axios.post('https://localhost:44394/api/Bebidas', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }

    render() {
        const {nombre, tipo, nacionalidad, marca, precio_unitario, precio_botella, cantidad, anio_cosecha, descripcion, proveedor} = this.state;
        return (
            <>
                <Hero hero = "restaurantHero">
                        <Banner title = "Agregar bebida"
                                subtitle = "Por favor ingrese todos los campos">
                            <Link to = "/bebidas" className = "btn-primary">
                                Volver 
                            </Link>
                        </Banner>
                </Hero>
                <br/>
                <div className="services">
                        <div className ="formulario">
                            <form className="form-horizontal" onSubmit={this.submitHandler}>
                                <fieldset>
                                    <legend> Nueva Bebida </legend>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="codigo">Codigo</label>  
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
                                        <label className="col-md-4 control-label" htmlFor="tipo">Tipo</label>  
                                            <div className="col-md-4">
                                                <input id="tipo" 
                                                name="tipo" 
                                                type="text" 
                                                placeholder="" 
                                                className="form-control input-md" 
                                                required=""
                                                value = {tipo} 
                                                onChange={this.changeHandler}/>
                                            </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="nacionalidad">nacionalidad</label>  
                                            <div className="col-md-4">
                                                <input id="nacionalidad" 
                                                name="nacionalidad" 
                                                type="text" 
                                                placeholder="" 
                                                className="form-control input-md" 
                                                required=""
                                                value = {nacionalidad}
                                                onChange={this.changeHandler}/>
                                            </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="marca">Marca</label>  
                                            <div className="col-md-4">
                                                <input id="marca" 
                                                name="marca" 
                                                type="text" 
                                                placeholder="" 
                                                className="form-control input-md" 
                                                required=""
                                                value = {marca}
                                                onChange={this.changeHandler}/>
                                            </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="precio_unitario">Precio Unitario</label>  
                                            <div className="col-md-4">
                                                <input id="precio_unitario" 
                                                name="precio_unitario" 
                                                type="text" 
                                                placeholder="" 
                                                className="form-control input-md" 
                                                required=""
                                                value = {precio_unitario} 
                                                onChange={this.changeHandler}/>
                                            </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="precio_botella">Precio Botella</label>  
                                            <div className="col-md-4">
                                                <input id="precio_botella" 
                                                name="precio_botella" 
                                                type="text" 
                                                placeholder="" 
                                                className="form-control input-md" 
                                                required=""
                                                value = {precio_botella} 
                                                onChange={this.changeHandler}/>  
                                            </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="cantidad">Cantidad</label>  
                                            <div className="col-md-4">
                                                <input id="cantidad" 
                                                name="cantidad" 
                                                type="text" 
                                                placeholder="" 
                                                className="form-control input-md" 
                                                required=""
                                                value = {cantidad} 
                                                onChange={this.changeHandler}/>
                                            </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="anio_cosecha">Año Cosecha</label>  
                                            <div className="col-md-4">
                                                <input id="anio_cosecha" 
                                                name="anio_cosecha" 
                                                type="text" 
                                                placeholder="" 
                                                className="form-control input-md" 
                                                required=""
                                                value = {anio_cosecha}
                                                onChange={this.changeHandler}/>
                                            </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="descripcion">Descripcion</label>  
                                            <div className="col-md-4">
                                                <textarea id="descripcion" 
                                                name="descripcion" 
                                                type="text" 
                                                placeholder="" 
                                                className="form-control input-md" 
                                                required=""
                                                value = {descripcion} 
                                                onChange={this.changeHandler}/>  
                                            </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="proveedor">proveedor</label>  
                                            <div className="col-md-4">
                                                <input id="proveedor" 
                                                name="proveedor" 
                                                type="text" 
                                                placeholder="" 
                                                className="form-control input-md" 
                                                required=""
                                                value = {proveedor}
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
                    </div>
            </>
        )
    }
}
