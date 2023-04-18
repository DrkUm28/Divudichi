import Hero from '../SharedComponents/Hero'
import Banner from '../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../SharedComponents/OpcionesView'

import React, { Component } from 'react'

export default class MainAdministracion extends Component {

    state = {
        servicios: [
            {
                icon: '',
                name: 'Picola Stella',
                path: "/picola",
                isNotLogged: false
            },
            {
                icon: '',
                name: 'Turis Anivo',
                path: "/Turio",
                isNotLogged: true
            },
            {
                icon: '',
                name: 'Notte di Franco',
                path: "/Notte",
                isNotLogged: false
            }
        ],
        user: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        const { user, password } = this.state;
        return (

            <React.Fragment>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de Restaurantes"
                        subtitle="por favor elija al restaurante que desea ingresar">

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
                            return <Link to={item.path} className="btn-primary"
                            >
                                <article key={index} className="services">
                                    <span>{item.icon}</span>
                                    <p>{item.name}</p>
                                </article>
                            </Link>
                        })}
                    </div>
                    <br />
                    <div className="formulario">
                        <form className="Login-form" onSubmit={this.submitHandler}>
                            <fieldset>

                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="nombre">Nombre</label>
                                    <div className="col-md-4">
                                        <input id="user"
                                            name="user"
                                            type="text"
                                            placeholder=""
                                            className="form-group input"
                                            required=""
                                            value={user}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="numero">Numero</label>
                                    <div className="col-md-4">
                                        <input id="password"
                                            name="password"
                                            type="password"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={password}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <button name="ingresar" className="btn-login"
                                >Ingresar</button>
                            </fieldset>

                        </form>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}
