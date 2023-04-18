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
            consecutivos: [],
            errorMsg: ''
        }
    }

    async getConsecutivos() {
        await axios.get('')
            .then(response => {
                response.data = JSON.parse(response.data);
                const consecutivos = response.data;
                this.setState({ consecutivos });
                console.table(consecutivos);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getConsecutivos();
    }


    render() {

        const { consecutivos, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de Consecutivos"
                        subtitle="aca se pueden ver los consecutivos del sistema">
                        <Link to="/seguridad" className="btn-primary">
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
                                consecutivos.length ?
                                    consecutivos.map(consecutivo =>
                                        <tr key={consecutivo.codigo}>
                                            <td><div className="fila">{consecutivo.codigo}</div></td>
                                            <td><div className="fila">{consecutivo.nombre}</div></td>
                                            <td><div className="fila">{consecutivo.numero}</div></td>
                                            <td><div className="fila">{consecutivo.cantidadSillas}</div></td>
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
                    <Link to="/agregar-consecutivo" className="btn-primary">agregar un consecutivo</Link>
                </div>
            </>
        )
    }
}
