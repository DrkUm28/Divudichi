import React from 'react'
import Hero from '../SharedComponents/Hero'
import Banner from '../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../SharedComponents/OpcionesView'
import axios from 'axios'
import { Component } from 'react'

export default class Marcas extends Component {

    constructor(props) {
        super(props)

        this.state = {
            marcas: [{
                cod_marca: '',
                nombre: '',
                cod_nacionalidad: '',
                descripcion: '',
                empresa: ''
            }],
            errorMsg: ''
        }
    }

    async getMarca() {
        await axios.get('https://localhost:44394/api/Marca')
            .then(response => {
                response.data = JSON.parse(response.data);
                const marcas = response.data;
                this.setState({ marcas });
                console.table(marcas);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getMarca();
    }


    render() {

        const { marcas, errorMsg } = this.state;

        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Marcas"
                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                        <Link to="/proveedores" className="btn-primary">
                            Volver
                        </Link>
                    </Banner>
                </Hero>
                <br />
                <OpcionesView />
                <div className="col-md-12">
                    <table className="table table-light ">
                        <thead className="thead-light">
                            <tr>
                                <th>Codigo</th>
                                <th>nombre</th>
                                <th>Codigo nacionalidad</th>
                                <th>descripcion</th>
                                <th>codigo empresa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                marcas.length ?
                                    marcas.map(marca =>
                                        <tr key={marca.codigo}>
                                            <td><div className="fila">MAR-{marca.cod_marca}</div></td>
                                            <td><div className="fila">{marca.nombre}</div></td>
                                            <td><div className="fila">NAC-{marca.cod_nacionalidad}</div></td>
                                            <td><div className="fila">{marca.descripcion}</div></td>
                                            <td><div className="fila">EMP-{marca.empresa}</div></td>
                                        </tr>
                                    )
                                    : null
                            }
                        </tbody>
                    </table>
                    {
                        errorMsg ?
                            <div>
                                {errorMsg}
                            </div>
                            : null
                    }
                </div>
                <br />

                <div className="services">
                    <Link to="/agregar-marca"
                        className="btn-primary">agregar nueva marca</Link>
                </div>

            </>
        )
    }
}
