import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../../SharedComponents/Banner'
import Hero from '../../../SharedComponents/Hero'
import { Component } from 'react'
import axios from 'axios'
export default class AgregarLimpieza extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: "",
            restaurante: "",
            marca: "",
            cantidad: "",
            descripcion: '',
            tipo: '',
            cantidad_medida: '',
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
            .post("https://localhost:44394/api/Limpieza", this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };
    render() {
        const { nombre, restaurante, marca, cantidad, descripcion, cantidad_medida, tipo, unidad_medida } = this.state;

        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Agregar nuevo articulo de limpieza"
                        subtitle="Por favor ingrese todos los campos">
                        <Link to="/limpieza-e-higiene" className="btn-primary">
                            Volver
                            </Link>
                    </Banner>
                </Hero>
                <br />
                <div className="services">
                    <div className="formulario">
                        <form className="form-horizontal" onSubmit={this.submitHandler}>
                            <fieldset>
                                <legend> Nuevo articulo de limpieza </legend>
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
                                    <label className="col-md-4 control-label" htmlFor="restaurante">
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
                                    <label className="col-md-4 control-label" htmlFor="marca">
                                        Marca
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
                                        htmlFor="tipo"
                                    >
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
                                        htmlFor="cantidad_medida"
                                    >
                                        Cantidad de medida
                            </label>
                                    <div className="col-md-4">
                                        <input
                                            id="cantidad_medida"
                                            name="cantidad_medida"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={cantidad_medida}
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
