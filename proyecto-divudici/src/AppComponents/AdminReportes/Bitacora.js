import React, { Component } from 'react'
import Hero from '../SharedComponents/Hero'
import Banner from '../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Puestos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            bitacora: [{
                cod_bitacora: '',
                usuario: '',
                fecha_hora_accion: '',
                descripcion_accion: '',
                detalle_accion: '',
                restaurante: ''
            }],
            errorMsg: ''
        }
    }

    async getBitacora() {
        await axios.get('https://localhost:44394/api/Bitacora')
            .then(response => {
                response.data = JSON.parse(response.data);
                const bitacora = response.data;
                this.setState({ bitacora });
                console.table(bitacora);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getBitacora();
    }


    render() {

        const { bitacora, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de Bitacora"
                        subtitle="Aqui se pueden ver las acciones de todos los usuarios">
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
                                <th>Codigo</th>
                                <th>usuario</th>
                                <th>fecha</th>
                                <th>descripcion</th>
                                <th>detalle</th>
                                <th>restaurante</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bitacora.length ?
                                    bitacora.map(bita =>
                                        <tr key={bita.codigo}>
                                            <td><div className="fila">BIT-{bita.cod_bitacora}</div></td>
                                            <td><div className="fila">{bita.usuario}</div></td>
                                            <td><div className="fila">{bita.fecha_hora_accion}</div></td>
                                            <td><div className="fila">{bita.descripcion_accion}</div></td>
                                            <td><div className="fila">{bita.detalle_accion}</div></td>
                                            <td><div className="fila">RES-{bita.restaurante}</div></td>
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
