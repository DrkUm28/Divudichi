import React, { Component } from 'react'
import Hero from '../SharedComponents/Hero'
import Banner from '../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Puestos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clientes: [{
                cod_reporteCliente: "",
                cod_cliente: "",
                descripcion: "",
                restaurante: "",
                cod_factura: ""
            }],
            errorMsg: ''
        }
    }

    async getClientes() {
        await axios.get('https://localhost:44394/api/ReporteCliente')
            .then(response => {
                response.data = JSON.parse(response.data);
                const clientes = response.data;
                this.setState({ clientes });
                console.table(clientes);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getClientes();
    }

    render() {

        const { clientes, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de Clientes"
                        subtitle="Aqui se pueden ver los clientes de todos los restaurantes">
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
                                <th>Codigo reporte</th>
                                <th>codigo de cliente</th>
                                <th>descripcion</th>
                                <th>restaurante</th>
                                <th>codigo factura</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clientes.length ?
                                    clientes.map(cliente =>
                                        <tr key={cliente.cod_reporteCliente}>
                                            <td><div className="fila">REC-{cliente.cod_reporteCliente}</div></td>
                                            <td><div className="fila">CLI-{cliente.cod_cliente}</div></td>
                                            <td><div className="fila">{cliente.descripcion}</div></td>
                                            <td><div className="fila">{cliente.restaurante}</div></td>
                                            <td><div className="fila">FAC-{cliente.cod_factura}</div></td>
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
