import Hero from '../SharedComponents/Hero'
import Banner from '../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../SharedComponents/OpcionesView'

import React, { Component } from 'react'

export default class MainRestaurantes extends Component {

    state = {
        servicios: [
            {
                icon: '',
                name: 'bitacora',
                path: "/bitacora"
            },
            {
                icon: '',
                name: 'clientes',
                path: "/reportes-clientes"
            },
            {
                icon: '',
                name: 'facturacion',
                path: "/reportes-facturacion"
            }
        ]
    }

    render() {
        return (

            <React.Fragment>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de Reportes"
                        subtitle="por favor elija una de las opciones para continuar">

                        <Link to="/" className="btn-primary">
                            Inicio
                        </Link>
                    </Banner>
                </Hero>
                <br />
                <OpcionesView />
                <div className="services">
                    <div className="services-center">
                        {this.state.servicios.map((item, index) => {
                            return <Link to={item.path} className="btn-primary">
                                <article key={index} className="services">
                                    <span>{item.icon}</span>
                                    <p>{item.name}</p>
                                </article>
                            </Link>
                        })}
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
