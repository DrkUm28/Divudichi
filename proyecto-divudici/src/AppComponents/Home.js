import React from 'react';
import Banner from '../AppComponents/SharedComponents/Banner'
import Hero from '../AppComponents/SharedComponents/Hero';
import { Link } from 'react-router-dom';
import auth from './Auth'
import { Component } from 'react'
import Login from './Login';

export const Home = (props) => {
    return (
        <>
            <Hero hero="defaultHero">
                <Banner title="Bienvenidos"
                    subtitle="por favor presiona un boton para continuar">
                    <Link to="/restaurantes/" className="btn-primary"
                        onClick={() => {
                            auth.login(() => {
                                props.history.push("/restaurantes")
                            })
                        }}
                    >
                        Restaurantes
                    </Link>

                    <Link to="/proveedores/" className="btn-primary">
                        Proveedores
                    </Link>

                    <Link to="/clientes/" className="btn-primary">
                        Clientes
                    </Link>

                    <Link to="/Seguridad/" className="btn-primary">
                        Seguridad
                    </Link>

                    <Link to="/administracion/" className="btn-primary">
                        Administracion
                    </Link>

                    <Link to="/reportes/" className="btn-primary">
                        Reportes
                    </Link>

                    <Link to="/formClientes" className="btn-primary">
                        Form Clientes
                    </Link>
                </Banner>

            </Hero>


        </>
    )
}
