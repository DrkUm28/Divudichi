import Hero from '../AppComponents/SharedComponents/Hero'
import Banner from '../AppComponents/SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../AppComponents/SharedComponents/OpcionesView'
import React, { Component } from 'react'
import axios from 'axios'
export default class ListaReportes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            reportes: [],
            errorMsg: ''
        }
    }

    async getReportes() {
        await axios.get('')
            .then(response => {
                response.data = JSON.parse(response.data);
                const reportes = response.data;
                this.setState({ reportes });
                console.table(reportes);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getReportes();
    }

    render() {
        const { reportes, errorMsg } = this.state;
        return (
            <React.Fragment>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de reportes"
                        subtitle="aqui se muestran todos los reportes de los restaurantes">
                        <Link to="/" className="btn-primary">
                            Inicio
                        </Link>
                    </Banner>
                </Hero>
                <br />
                <OpcionesView />
                <div>
                    aqui van a ir las opciones de busqueda <br />
                    esto no se si hacerlo aqui, dentro del banner o dentro del body
                </div>

                <br />
                <br />

                <div className="col-md-12">
                    <table className="table table-light ">
                        <thead className="thead-light">
                            <tr>
                                <th>Codigo</th>
                                <th>nombre</th>
                                <th>reporte de caja</th>
                                <th>codigo de factura</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reportes.length ?
                                    reportes.map(reporte =>
                                        <tr key={reporte.codigo}>
                                            <td><div className="fila">REP-{reporte.cod_reporteCliente}</div></td>
                                            <td><div className="fila">CLI-{reporte.cod_cliente}</div></td>
                                            <td><div className="fila">{reporte.descripcion}</div></td>
                                            <td><div className="fila">{reporte.restaurante}</div></td>
                                            <td><div className="fila">{reporte.factura}</div></td>
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
            </React.Fragment>
        )
    }
}
