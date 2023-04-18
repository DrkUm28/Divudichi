import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../SharedComponents/Banner'
import Hero from '../../SharedComponents/Hero'
import axios from 'axios'
import { Component } from 'react'
import * as yup from 'yup'
import { ErrorMessage, Formik, Form, Field } from 'formik'
export default class AgregarMesa extends Component {

    constructor(props) {
        super(props)

        this.state = {
            unidad: '',
            escala: '',
            detalle: '',
            simbolo: '',
            simbologia: ''
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
        const { unidad, escala, detalle, simbolo, simbologia } = this.state;

        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Agregar nuevo consecutivo"
                        subtitle="Por favor ingrese todos los campos">
                        <Link to="/consecutivos" className="btn-primary">
                            Volver
                            </Link>
                    </Banner>
                </Hero>
                <br />
                <div className="services">
                    <Formik>
                        <Form>
                            <div className="formulario">
                                <fieldset>
                                    <legend> Nueva unidad de medida </legend>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="codigo">Codigo </label>
                                        <div className="col-md-4">
                                            <input id="codigo" name="codigo" type="text" placeholder="" className="form-control input-md" required="" disabled />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="unidad">Unidad</label>
                                        <div className="col-md-4">
                                            <input id="unidad"
                                                name="unidad"
                                                type="text"
                                                placeholder=""
                                                className="form-control input-md"
                                                required=""
                                                value={unidad}
                                                onChange={this.changeHandler}
                                                required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="escala">Escala</label>
                                        <div className="col-md-4">
                                            <input id="escala"
                                                name="escala"
                                                type="text"
                                                placeholder=""
                                                className="form-control input-md"
                                                required=""
                                                value={escala}
                                                onChange={this.changeHandler} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="detalle">Detalle</label>
                                        <div className="col-md-4">
                                            <input id="detalle"
                                                name="detalle"
                                                type="text"
                                                placeholder=""
                                                className="form-control input-md"
                                                required=""
                                                value={detalle}
                                                onChange={this.changeHandler} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="simbolo">Simbolo</label>
                                        <div className="col-md-4">
                                            <input id="simbolo"
                                                name="simbolo"
                                                type="text"
                                                placeholder=""
                                                className="form-control input-md"
                                                required=""
                                                value={simbolo}
                                                onChange={this.changeHandler} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-4 control-label" htmlFor="simbologia">Simbologia</label>
                                        <div className="col-md-4">
                                            <input id="simbologia"
                                                name="simbologia"
                                                type="text"
                                                placeholder=""
                                                className="form-control input-md"
                                                required=""
                                                value={simbologia}
                                                onChange={this.changeHandler} required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-8">
                                            <button id="salvar" name="salvar" className=" btn-primary">Salvar</button>
                                            <button id="cancelar" name="cancelar" className=" btn-default"> Cancelar</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </>
        )
    }
}
