import React from 'react'
import axios from 'axios'
import { Formik, ErrorMessage, Form, Field } from 'formik'
import * as yup from 'yup'
import Banner from '../AppComponents/SharedComponents/Banner'
import Hero from '../AppComponents/SharedComponents/Hero';
import { Component } from 'react'

export default class Login extends Component {

    handleSubmit = values => {
        axios.post('url', values)
            .then(response => {
                const { data } = response
                if (data) {
                    localStorage.setItem('app-token', data)
                }
            })

    }



    validations = yup.object().shape({
        user: yup.string().required(),
        password: yup.string().required()
    })
    render() {
        return (
            <>
                <Hero hero="defaultHero">
                    <Banner title="Bienvenidos"
                        subtitle="por favor llene todos los campos con sus credenciales para continuar">
                    </Banner>
                </Hero>

                <Formik
                    initialValues={{}}
                    onSubmit={this.handleSubmit}
                    validationSchema={this.validations}>
                    <Form className="Login-Form ">
                        <h3>
                            Formulario de login
                        </h3>
                        <div className="Login-group">
                            usuario
                            <Field
                                name="user"
                                className="Login-field"
                            />
                            <ErrorMessage
                                component="span"
                                name="user"
                                className="Login-Error"
                            />
                        </div>
                        contraseña
                        <div className="Login-group">
                            <Field
                                name="password"
                                className="Login-field"
                            />
                            <ErrorMessage
                                component="span"
                                name="password"
                                className="Login-Error"
                            />
                        </div>
                        <button className="Login-Btn" type=" submit">Aceptar</button>
                    </Form>
                </Formik>
            </>
        )
    }
}
