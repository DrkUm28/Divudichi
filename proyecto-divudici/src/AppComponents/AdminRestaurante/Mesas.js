import React from 'react'
import Hero from '../SharedComponents/Hero'
import Banner from '../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../SharedComponents/OpcionesView'
import axios from 'axios'
import { Component } from 'react'

export default class Mesas extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mesas: [{
                cod_mesa: '',
                nombre: '',
                numero: '',
                cantidadSillas: ''
            }],
            errorMsg: ''
        }
    }

    async getMesas() {
        await axios.get('https://localhost:44394/api/Mesa')
            .then(response => {
                response.data = JSON.parse(response.data);
                const mesas = response.data;
                this.setState({ mesas });
                console.table(mesas);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getMesas();
    }

    render() {

        const { mesas, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de Mesas"
                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                        <Link to="/restaurantes" className="btn-primary">
                            Volver
                    </Link>
                    </Banner>
                </Hero>
                <br />
                <div className="col-md-12">
                    <table className="table table-light ">
                        <thead className="thead-light">
                            <tr>
                                <th>Codigo</th>
                                <th>nombre</th>
                                <th>numero</th>
                                <th>cantidad de sillas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mesas.length ?
                                    mesas.map(mesa =>
                                        <tr key={mesa.codigo}>
                                            <td><div className="fila">{mesa.cod_mesa}</div></td>
                                            <td><div className="fila">{mesa.nombre}</div></td>
                                            <td><div className="fila">{mesa.numero}</div></td>
                                            <td><div className="fila">{mesa.cantidadSillas}</div></td>
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
                <OpcionesView />
                <div className="services">
                    <Link to="/agregar-mesa" className="btn-primary">agregar una mesa</Link>
                </div>

            </>
        )
    }
}
