import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../../SharedComponents/Banner'
import Hero from '../../../SharedComponents/Hero'
import axios from 'axios'
import { Component } from 'react'

export default class AgregarTecnologia extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cod_tecnologia: '', /*4 siguiente */
            nombre: '',
            cantidad: '',
            precio: '',
            cod_restaurante: '',
            cod_marca: '',
            descripcion: '',
            proveedor: ''
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
            .post("https://localhost:44394/api/Tecnologia", this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const { nombre, precio, cod_restaurante, cod_marca, cantidad, descripcion, proveedor } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Agregar nuevo articulo tecnologico"
                        subtitle="Por favor ingrese todos los campos">
                        <Link to="/tecnologia" className="btn-primary">
                            Volver
                            </Link>
                    </Banner>
                </Hero>
                <br />
                <div className="services">
                    <div className="formulario">
                        <form className="form-horizontal" onSubmit={this.submitHandler}>
                            <fieldset>
                                <legend> Nuevo articulo de tecnologia </legend>
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
                                    <label
                                        className="col-md-4 control-label"
                                        htmlFor="cantidad"
                                    >
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
                                    <label
                                        className="col-md-4 control-label"
                                        htmlFor="precio"
                                    >
                                     Precio
                            </label>
                                    <div className="col-md-4">
                                        <input
                                            id="precio"
                                            name="precio"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={precio}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="cod_restaurante">
                                        Restaurante
                            </label>
                                    <div className="col-md-4">
                                        <input
                                            id="cod_restaurante"
                                            name="cod_restaurante"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={cod_restaurante}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="cod_marca">
                                        Marca
                            </label>
                                    <div className="col-md-4">
                                        <input
                                            id="cod_marca"
                                            name="cod_marca"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={cod_marca}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label
                                        className="col-md-4 control-label"
                                        htmlFor="descripcion"
                                    >
                                        Descripcion
                            </label>
                                    <div className="col-md-4">
                                        <input
                                            id="descripcion"
                                            name="descripcion"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={descripcion}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="col-md-4 control-label"
                                        htmlFor="proveedor"
                                    >
                                        Proveedor
                            </label>
                                    <div className="col-md-4">
                                        <input
                                            id="proveedor"
                                            name="proveedor"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={proveedor}
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
