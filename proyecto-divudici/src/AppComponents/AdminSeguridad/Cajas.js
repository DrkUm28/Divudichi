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
            cajas: [{
                cod_caja: '',
                fecha_hora: '',
                descripcion_accion: '',
                monto_dinero: '',
                apertura_caja: '',
                cierre_caja: ''
            }],
            errorMsg: ''
        }
    }

    async getCajas() {
        await axios.get('https://localhost:44394/api/Reporte')
            .then(response => {
                response.data = JSON.parse(response.data);
                const cajas = response.data;
                this.setState({ cajas });
                console.table(cajas);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getCajas();
    }


    render() {

        const { cajas, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de cajas"
                        subtitle="aca se pueden ver las distintas cajas de los restaurantes">
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
                                <th>fecha</th>
                                <th>descripcion</th>
                                <th>monto de dinero</th>
                                <th>apertura de caja</th>
                                <th>cierre de caja</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cajas.length ?
                                    cajas.map(caja =>
                                        <tr key={caja.codigo}>
                                            <td><div className="fila">CAJ-{caja.cod_caja}</div></td>
                                            <td><div className="fila">{caja.fecha_hora}</div></td>
                                            <td><div className="fila">{caja.descripcion_accion}</div></td>
                                            <td><div className="fila">{caja.monto_dinero}</div></td>
                                            <td><div className="fila">{caja.apertura_caja}</div></td>
                                            <td><div className="fila">{caja.cierre_caja}</div></td>
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
                    <Link to="/agregar-caja" className="btn-primary">agregar una caja</Link>
                </div>
            </>
        )
    }
}
