import Hero from '../SharedComponents/Hero'
import Banner from '../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../SharedComponents/OpcionesView'
import React, { Component } from 'react'
import axios from 'axios'
export default class ControlClientes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clientes: [{
                cod_reporteCliente: '',
                cod_cliente: '',
                descripcion: '',
                restaurante: '',
                cod_factura: ''
            }],
            errorMsg: ''
        }
    }

    async getClientes() {
        await axios.get('https://localhost:44394/api/ReporteClienteCaja')
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
            <React.Fragment>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de clientes"
                        subtitle="aqui se muestran todos los clientes que visitaron un restaurante">
                        <Link to="/" className="btn-primary">
                            Inicio
                        </Link>
                    </Banner>
                </Hero>
                <br />
                <OpcionesView />

                <br />
                <br />

                <div className="col-md-12">
                    <table className="table table-light ">
                        <thead className="thead-light">
                            <tr>
                                <th>Codigo</th>
                                <th>descripcion</th>
                                <th>codigo del restaurante</th>
                                <th>codigo de factura</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clientes.length ?
                                    clientes.map(cliente =>
                                        <tr key={cliente.codigo}>
                                            <td><div className="fila">CLI-{cliente.cod_reporteCliente}</div></td>
                                            <td><div className="fila">{cliente.cod_cliente}</div></td>
                                            <td><div className="fila">RES-{cliente.restaurante}</div></td>
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
            </React.Fragment>
        )
    }
}
