import React, { Component } from 'react'
import Hero from '../SharedComponents/Hero'
import Banner from '../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Facturacion extends Component {

    constructor(props) {
        super(props)

        this.state = {
            facturas: [{
                cod_caja: '',
                cod_reporteCaja: '',
                cod_factura: ''
            }],
            errorMsg: ''
        }
    }

    async getFacturacion() {
        await axios.get('https://localhost:44394/api/ReporteCaja')
            .then(response => {
                response.data = JSON.parse(response.data);
                const facturacion = response.data;
                this.setState({ facturacion });
                console.table(facturacion);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getFacturacion();
    }


    render() {

        const { facturas, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de Facturacion"
                        subtitle="Aqui se pueden ver las facturas de todos los restaurantes">
                        <Link to="/reportes" className="btn-primary">
                            Volver
                        </Link>
                    </Banner>
                </Hero>
                <br />
                <div className="col-md-12">
                    <table className="table table-light ">
                        <thead className="thead-light">
                            <tr>
                                <th>Codigo de caja</th>
                                <th>Codigo de Reporte</th>
                                <th>Codigo de factura</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                facturas.length ?
                                    facturas.map(factura =>
                                        <tr key={factura.codigo}>
                                            <td><div className="fila">CAJ-{factura.cod_caja}</div></td>
                                            <td><div className="fila">REC-{factura.cod_reporteCaja}</div></td>
                                            <td><div className="fila">FAC-{factura.cod_factura}</div></td>
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

            </>
        )
    }
}
