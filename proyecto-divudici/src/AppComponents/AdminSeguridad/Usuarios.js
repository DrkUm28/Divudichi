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
            usuarios: [],
            errorMsg: ''
        }
    }

    async getPuestos() {
        await axios.get('')
            .then(response => {
                response.data = JSON.parse(response.data);
                const puestos = response.data;
                this.setState({ puestos });
                console.table(puestos);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getPuestos();
    }


    render() {

        const { usuarios, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de usuarios"
                        subtitle="Aqui se pueden ver una lista de los usuarios que se manejan en el sistema">
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
                                usuarios.length ?
                                    usuarios.map(usuario =>
                                        <tr key={usuario.codigo}>
                                            <td><div className="fila">{usuario.codigo}</div></td>
                                            <td><div className="fila">{usuario.nombre}</div></td>
                                            <td><div className="fila">{usuario.numero}</div></td>
                                            <td><div className="fila">{usuario.cantidadSillas}</div></td>
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
                    <Link to="/agregar-usuario" className="btn-primary">agregar un usuario</Link>
                </div>
            </>
        )
    }
}
