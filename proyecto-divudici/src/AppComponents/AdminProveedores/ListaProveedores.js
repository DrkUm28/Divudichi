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
            proveedores: [{
                cod_proveedor: '',
                cedula: '',
                fechaIngreso: '',
                nombre: '',
                primerApellido: '',
                segundoApellido: '',
                correo: '',
                direccion: '',
                telefono_oficina: '',
                fax: '',
                celular: ''
            }],
            errorMsg: ''
        }
    }

    async getProveedores() {
        await axios.get('https://localhost:44394/api/Proveedor')
            .then(response => {
                response.data = JSON.parse(response.data);
                const proveedores = response.data;
                this.setState({ proveedores });
                console.table(proveedores);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getProveedores();
    }


    render() {

        const { proveedores, errorMsg } = this.state;

        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="proveedores"
                        subtitle="En esta seccion se pueden ver los proveedores de los restaurantes">
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
                                <th>cedula</th>
                                <th>fecha de ingreso</th>
                                <th>nombre</th>
                                <th>nombre</th>
                                <th>primer apellido</th>
                                <th>segundo apellido</th>
                                <th>correo</th>
                                <th>direccion</th>
                                <th>telefono de oficina</th>
                                <th>fax</th>
                                <th>celular</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                proveedores.length ?
                                    proveedores.map(proveedor =>
                                        <tr key={proveedor.codigo}>
                                            <td><div className="fila">{proveedor.codigo}</div></td>
                                            <td><div className="fila">{proveedor.cedula}</div></td>
                                            <td><div className="fila">{proveedor.fechaIngreso}</div></td>
                                            <td><div className="fila">{proveedor.nombre}</div></td>
                                            <td><div className="fila">{proveedor.primerApellido}</div></td>
                                            <td><div className="fila">{proveedor.segundoApellido}</div></td>
                                            <td><div className="fila">{proveedor.correo}</div></td>
                                            <td><div className="fila">{proveedor.direccion}</div></td>
                                            <td><div className="fila">{proveedor.telefono_oficina}</div></td>
                                            <td><div className="fila">{proveedor.fax}</div></td>
                                            <td><div className="fila">{proveedor.celular}</div></td>
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
                    <Link to="/agregar-proveedor"
                        className="btn-primary">agregar nuevo proveedor</Link>
                </div>

            </>
        )
    }
}
