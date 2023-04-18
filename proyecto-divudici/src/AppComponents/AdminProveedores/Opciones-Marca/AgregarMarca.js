import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../SharedComponents/Banner'
import Hero from '../../SharedComponents/Hero'
import axios from 'axios'
import { Component } from 'react'

export default class AgregarMarca extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nombre: "",
            nacionalidad: "",
            descripcion: "",
            cedula_jur: "",
            nombre_empresa: '',
            detalle: '',
            telefono: ''
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
            .post("https://localhost:44394/api/Marca", this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {

        const { nombre, nacionalidad, descripcion, cedula_jur, nombre_empresa, detalle, telefono } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Agregar una nueva marca"
                        subtitle="Por favor ingrese todos los campos">
                        <Link to="/marcas" className="btn-primary">
                            Volver
                        </Link>
                    </Banner>
                </Hero>
                <br />
                <div className="services">
                    <div className="formulario">
                        <form className="form-horizontal" onSubmit={this.submitHandler}>
                            <fieldset>
                                <legend> Nueva marca </legend>
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
                                    <label className="col-md-4 control-label" htmlFor="nacionalidad">
                                        Nacionalidad
                                    </label>
                                    <div className="col-md-4">
                                        <input
                                            id="nacionalidad"
                                            name="nacionalidad"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={nacionalidad}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="descripcion">
                                        Descripcion
                                    </label>
                                    <div className="col-md-4">
                                        <textarea
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
                                        htmlFor="cedula_jur"
                                    >
                                        Cedula juridica
                                    </label>
                                    <div className="col-md-4">
                                        <input
                                            id="cedula_jur"
                                            name="cedula_jur"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={cedula_jur}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="col-md-4 control-label"
                                        htmlFor="nombre_empresa"
                                    >
                                        Nombre de la empresa
                                    </label>
                                    <div className="col-md-4">
                                        <input
                                            id="nombre_empresa"
                                            name="nombre_empresa"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={nombre_empresa}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="col-md-4 control-label"
                                        htmlFor="detalle"
                                    >
                                        Detalle de la empresa
                                    </label>
                                    <div className="col-md-4">
                                        <input
                                            id="detalle"
                                            name="detalle"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={detalle}
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label
                                        className="col-md-4 control-label"
                                        htmlFor="telefono"
                                    >
                                        Telefono de la empresa
                                    </label>
                                    <div className="col-md-4">
                                        <input
                                            id="telefono"
                                            name="telefono"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={telefono}
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
