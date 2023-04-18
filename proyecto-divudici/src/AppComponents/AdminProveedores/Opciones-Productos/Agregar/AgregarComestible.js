import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../../SharedComponents/Banner'
import Hero from '../../../SharedComponents/Hero'
import axios from 'axios'

import { Component } from 'react'

export default class AgregarComestible extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cod_comestible: '2',
            nombre: "",
            cantidad: "",
            tipo: "",
            restaurante: "",
            marca: '',
            clase: '',
            linea: '',
            unidad_medida: ''
        };
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);

        /*aca se esta generando el post request al api, como primer parametro se le pasara la url del api
            y como segundo parametro se le pasan los datos que se quieran mandar al api, por lo que se le pasa el current
            state*/
        axios
            .post("https://localhost:44394/api/ComestibleClase", this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const { nombre, cantidad, tipo, restaurante, marca, clase, linea, unidad_medida } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Agregar nuevo comestibles"
                        subtitle="Por favor ingrese todos los campos">
                        <Link to="/comestibles" className="btn-primary">
                            Volver
                        </Link>
                    </Banner>
                </Hero>
                <br />
                <div className="services">
                    <div className="formulario">
                        <form className="form-horizontal" onSubmit={this.submitHandler}>
                            <fieldset>
                                <legend> Nuevo Comestible</legend>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="codigo">
                                        Codigo
                                    </label>
                                    <div className="col-md-4">
                                        <input
                                            id="codigo"
                                            name="codigo"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="nombre">
                                        Nombre
                            </label>
                                    <div className="col-md-4">
                                        <input
                                            id="nombre"
                                            name="nombre"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={nombre}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="cantidad">
                                        Cantidad
                            </label>
                                    <div className="col-md-4">
                                        <input
                                            id="cantidad"
                                            name="cantidad"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={cantidad}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="tipo">
                                        Tipo
                            </label>
                                    <div className="col-md-4">
                                        <input
                                            id="tipo"
                                            name="tipo"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={tipo}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="col-md-4 control-label"
                                        htmlFor="restaurante"
                                    >
                                        Restaurante
                            </label>
                                    <div className="col-md-4">
                                        <input
                                            id="restaurante"
                                            name="restaurante"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={restaurante}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="col-md-4 control-label"
                                        htmlFor="marca"
                                    >
                                        Marca del comestible
                            </label>
                                    <div className="col-md-4">
                                        <input
                                            id="marca"
                                            name="marca"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={marca}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="col-md-4 control-label"
                                        htmlFor="clase"
                                    >
                                        Clase de comestible
                            </label>
                                    <div className="col-md-4">
                                        <input
                                            id="clase"
                                            name="clase"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={clase}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="col-md-4 control-label"
                                        htmlFor="linea"
                                    >
                                        Linea del comestible
                            </label>
                                    <div className="col-md-4">
                                        <input
                                            id="linea"
                                            name="linea"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={linea}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="col-md-4 control-label"
                                        htmlFor="unidad_medida"
                                    >
                                        Unidad de medida
                            </label>
                                    <div className="col-md-4">
                                        <input
                                            id="unidad_medida"
                                            name="unidad_medida"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={unidad_medida}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-8">
                                        <button
                                            id="salvar"
                                            name="salvar"
                                            className="btn btn-success"
                                        >
                                            Salvar
                            </button>
                                        <button
                                            id="cancelar"
                                            name="cancelar"
                                            className="btn btn-danger"
                                        >
                                            Cancelar
                            </button>
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
