import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../SharedComponents/Banner'
import Hero from '../../SharedComponents/Hero'
import { Component } from 'react'
import axios from 'axios'
export default class AgregarEmpleado extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cedula: '',
            nombre: '',
            primer_apellido: '',
            segundo_apellido: '',
            telefono1: '',
            telefono2: '',
            puesto: '',
            nacionalidad: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);

        /*aca se esta generando el post request al api, como primer parametro se le pasara la url del api
        y como segundo parametro se le pasan los datos que se quieran mandar al api, por lo que se le pasa el current
        state*/
        axios.post('url', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const { cedula, nombre, primer_apellido, segundo_apellido, telefono1, telefono2, puesto, nacionalidad } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Agregar un nuevo usuario"
                        subtitle="Por favor ingrese todos los campos">
                        <Link to="/usuarios" className="btn-primary">
                            Volver
                            </Link>
                    </Banner>
                </Hero>
                <br />
                <div className="services">
                    <div className="formulario">
                        <form className="form-horizontal" onSubmit={this.submitHandler}>
                            <fieldset>
                                <legend> Nuevo Usuario </legend>
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
                                    <label className="col-md-4 control-label" htmlFor="cedula">cedula</label>
                                    <div className="col-md-4">
                                        <input id="cedula"
                                            name="Cedula"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={cedula}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="primer_apellido">primer apellido</label>
                                    <div className="col-md-4">
                                        <input id="primer_apellido"
                                            name="primer_apellido"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={primer_apellido}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="segundo_apellido">segundo apellido</label>
                                    <div className="col-md-4">
                                        <input id="segundo_apellido"
                                            name="segundo_apellido"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={segundo_apellido}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="telefono1">Telefono</label>
                                    <div className="col-md-4">
                                        <input id="telefono1"
                                            name="telefono"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={telefono1}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="telefono2">Telefono de emergencia</label>
                                    <div className="col-md-4">
                                        <input id="telefono2"
                                            name="telefono2"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={telefono2}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="puesto">Puesto</label>
                                    <div className="col-md-4">
                                        <input id="puesto"
                                            name="puesto"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={puesto}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="nacionalidad">Nacionalidad</label>
                                    <div className="col-md-4">
                                        <input id="nacionalidad"
                                            name="nacionalidad"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={nacionalidad}
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
