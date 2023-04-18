import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../SharedComponents/Banner'
import Hero from '../../SharedComponents/Hero'
import axios from 'axios'
import { Formik, Field } from 'formik'
import { Component } from 'react'
import { TextField, Button, TextareaAutosize, Checkbox } from '@material-ui/core'
export default class AgregarMesa extends Component {

    constructor(props) {
        super(props)

        this.state = {
            codigo: '',
            tipo: '',
            descripcion: '',
            valor: '',
            tienePrefijo: false,
            prefijo: ''
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

    changeCheck = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: true })
    }

    render() {
        const { codigo, tipo, descripcion, valor, tienePrefijo, prefijo } = this.state;

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
                    <div className="formulario">
                        <Formik
                            initialValues={{}}
                            onSubmit={(data) => {
                                console.log("submiting: ", data)
                            }}
                        >
                            <form className="form-horizontal" onSubmit={this.submitHandler}>
                                <fieldset>
                                    <legend> Nuevo Consecutivo </legend>
                                    <div className="form-group">
                                        <Field
                                            name="codigo"
                                            value={codigo}
                                            disabled
                                            as={TextField}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Field
                                            name="tipo"
                                            type="text"
                                            placeholder="Tipo"
                                            required
                                            value={tipo}
                                            onChange={this.changeHandler}
                                            as={TextField}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Field
                                            id="descripcion"
                                            name="descripcion"
                                            type="text"
                                            placeholder="descripcion"
                                            required
                                            value={descripcion}
                                            onChange={this.changeHandler}
                                            as={TextareaAutosize}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Field
                                            id="valor"
                                            name="valor"
                                            type="text"
                                            placeholder="Valor"
                                            required
                                            value={valor}
                                            onChange={this.changeHandler}
                                            as={TextField}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tienePrefijo">contiene prefijo</label>
                                        <Field
                                            name="tienePrefijo"
                                            type="checkbox"
                                            onChange={this.changeCheck}
                                            as={Checkbox}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Field
                                            id="prefijo"
                                            name="prefijo"
                                            type="text"
                                            placeholder="Prefijo"
                                            value={prefijo}
                                            onChange={this.changeHandler}
                                            as={TextField}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-8">
                                            <Button id="salvar" name="salvar" className="btn btn-success" type="submit">Salvar</Button>
                                            <Button id="cancelar" name="cancelar" className="btn btn-danger" type="reset"> Cancelar</Button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </Formik>
                    </div>
                </div>
            </>
        )
    }
}
