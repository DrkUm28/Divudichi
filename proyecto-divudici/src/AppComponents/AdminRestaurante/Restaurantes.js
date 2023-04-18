import React, { Component } from 'react'
import Hero from '../SharedComponents/Hero'
import Banner from '../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../SharedComponents/OpcionesView'
import axios from 'axios'

export default class Puestos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            restaurantes: [{
                cod_restaurante: '',
                nombre: '',
                direccion: '',
                telefono: '',
                activo: '',
                cant_clientes: '',
                especialidad: ''
            }],
            errorMsg: ''
        }
    }

    async getRestaurantes() {
        await axios.get(`https://localhost:44394/api/Restaurante`)
            .then(response => {
                response.data = JSON.parse(response.data);
                const restaurantes = response.data;
                this.setState({ restaurantes });
                console.table(restaurantes);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getRestaurantes();
    }

    render() {

        const { restaurantes, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de Restaurantes"
                        subtitle="Aqui se pueden ver una lista de los restaurantes que se manejan en el sistema">
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
                                <th>Direccion</th>
                                <th>telefono</th>
                                <th>Activo</th>
                                <th>cantidad de clientes</th>
                                <th>especialidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                restaurantes.length ?
                                    restaurantes.map(restaurante =>
                                        <tr key={restaurante.codigo}>
                                            <td><div className="fila">res-{restaurante.cod_restaurante}</div></td>
                                            <td><div className="fila">{restaurante.nombre}</div></td>
                                            <td><div className="fila">{restaurante.direccion}</div></td>
                                            <td><div className="fila">{restaurante.telefono}</div></td>
                                            <td><div className="fila">{restaurante.activo}</div></td>
                                            <td><div className="fila">{restaurante.cant_clientes}</div></td>
                                            <td><div className="fila">{restaurante.especialidad}</div></td>
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
                    <Link to="/agregar-restaurante" className="btn-primary">agregar un restaurante</Link>
                </div>
            </>
        )
    }
}
