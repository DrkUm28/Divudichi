import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Banner from '../../../SharedComponents/Banner'
import Hero from '../../../SharedComponents/Hero'
export default class AgregarEquipo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cod_equipo: '3',
            nombre: '',
            cod_restaurante: '',
            cod_marca: '',
            cantidad: '',
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
            .post("https://localhost:44394/api/Utensilios", this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const { nombre, proveedor, cod_restaurante, cod_marca, cantidad, descripcion } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Agregar nuevo equipo o utensilio"
                        subtitle="Por favor ingrese todos los campos">
                        <Link to="/equipos-y-utensilios" className="btn-primary">
                            Volver
                    </Link>
                    </Banner>
                </Hero>
                <br />
                <div className="services">
                    <div className="formulario">
                        <form className="form-horizontal" onSubmit={this.submitHandler}>
                            <fieldset>
                                <legend> Nuevo equipo o utensilio </legend>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="codigo">
                                        Codigo{" "}
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
