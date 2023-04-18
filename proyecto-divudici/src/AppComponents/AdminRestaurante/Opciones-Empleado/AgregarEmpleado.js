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
            cod_empleado: '5', /*empleado 5 a utilizar */ 
            cedula: '',
            nombre: '',
            primerApellido: '',
            segundoApellido: '',
            telefono1: '',
            telefono2: '',
            cod_puesto: '',
            cod_nacionalidad: '',
            cod_restaurante: ''
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
        axios.post('https://localhost:44394/api/Empleado', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        const { cedula, nombre, primerApellido, segundoApellido,
            telefono1, telefono2, cod_puesto, cod_nacionalidad, cod_restaurante } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Agregar un nuevo empleado"
                        subtitle="Por favor ingrese todos los campos">
                        <Link to="/empleados" className="btn-primary">
                            Volver
                            </Link>
                    </Banner>
                </Hero>
                <br />
                <div className="services">
                    <div className="formulario">
                        <form className="form-horizontal" onSubmit={this.submitHandler}>
                            <fieldset>
                                <legend> Nuevo Empleado </legend>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="codigo">Codigo </label>
                                    <div className="col-md-4">
                                        <input id="codigo" name="codigo" type="text" placeholder="" className="form-control input-md" required="" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="cedula">cedula</label>
                                    <div className="col-md-4">
                                        <input id="cedula"
                                            name="cedula"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={cedula}
                                            onChange={this.changeHandler} />
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
                                    <label className="col-md-4 control-label" htmlFor="primerApellido">primer Apellido</label>
                                    <div className="col-md-4">
                                        <input id="primerApellido"
                                            name="primerApellido"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={primerApellido}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="segundoApellido">segundo Apellido</label>
                                    <div className="col-md-4">
                                        <input id="segundoApellido"
                                            name="segundoApellido"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={segundoApellido}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="telefono1">Telefono</label>
                                    <div className="col-md-4">
                                        <input id="telefono1"
                                            name="telefono1"
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
                                    <label className="col-md-4 control-label" htmlFor="cod_puesto">Puesto</label>
                                    <div className="col-md-4">
                                        <input id="cod_puesto"
                                            name="cod_puesto"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={cod_puesto}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="cod_nacionalidad">Nacionalidad</label>
                                    <div className="col-md-4">
                                        <input id="cod_nacionalidad"
                                            name="cod_nacionalidad"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={cod_nacionalidad}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="cod_restaurante">Restaurante</label>
                                    <div className="col-md-4">
                                        <input id="cod_restaurante"
                                            name="cod_restaurante"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={cod_restaurante}
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
