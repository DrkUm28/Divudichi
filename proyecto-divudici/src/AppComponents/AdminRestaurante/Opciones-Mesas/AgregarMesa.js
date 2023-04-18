import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../SharedComponents/Banner'
import Hero from '../../SharedComponents/Hero'
import axios from 'axios'
import { Component } from 'react'

export default class AgregarMesa extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cod_mesa: '10',
            restaurante: '',
            nombre: '',
            numero: '',
            cantidadSillas: ''

        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    /*
        submitHandler =(e)=>{
            e.preventDefault();
            console.log(this.state);
    
            /*aca se esta generando el post request al api, como primer parametro se le pasara la url del api
            y como segundo parametro se le pasan los datos que se quieran mandar al api, por lo que se le pasa el current
            state
            axios.post( this.state)
                .then(response => {
                    console.log(response)
                })
                .catch(error =>{
                    console.log(error)
                })
        }*/

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://localhost:44394/api/Mesa', this.state)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.data)
            })
    }

    render() {
        const { nombre, numero, cantidadSillas, restaurante } = this.state;

        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Agregar nueva mesa"
                        subtitle="Por favor ingrese todos los campos">
                        <Link to="/mesas" className="btn-primary">
                            Volver
                            </Link>
                    </Banner>
                </Hero>
                <br />
                <div className="services">
                    <div className="formulario">
                        <form className="form-horizontal" onSubmit={this.submitHandler}>
                            <fieldset>
                                <legend> Nueva Mesa </legend>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="codigo">Codigo </label>
                                    <div className="col-md-4">
                                        <input id="codigo" name="codigo" type="text" placeholder="" className="form-control input-md" required="" disabled />
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
                                            value={nombre}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="numero">Numero</label>
                                    <div className="col-md-4">
                                        <input id="numero"
                                            name="numero"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={numero}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="cantidadSillas">Cantidad de sillas</label>
                                    <div className="col-md-4">
                                        <input id="cantidadSillas"
                                            name="cantidadSillas"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={cantidadSillas}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="restaurante">Restaurante</label>
                                    <div className="col-md-4">
                                        <input id="restaurante"
                                            name="restaurante"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={restaurante}
                                            onChange={this.changeHandler} />
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
