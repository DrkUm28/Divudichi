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
            roles: [{
                cod_rol: '',
                nombre: '',
                descripcion: ''
            }],
            errorMsg: ''
        }
    }

    async getRoles() {
        await axios.get('https://localhost:44394/api/Rol')
            .then(response => {
                response.data = JSON.parse(response.data);
                const roles = response.data;
                this.setState({ roles });
                console.table(roles);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getRoles();
    }

    render() {

        const { roles, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de roles"
                        subtitle="Aqui se pueden ver una lista de los roles que se manejan en el sistema">
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
                                <th>descripcion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                roles.length ?
                                    roles.map(rol =>
                                        <tr key={rol.codigo}>
                                            <td><div className="fila">ROL-{rol.cod_rol}</div></td>
                                            <td><div className="fila">{rol.nombre}</div></td>
                                            <td><div className="fila">{rol.descripcion}</div></td>
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
                    <Link to="/agregar-rol" className="btn-primary">agregar un rol</Link>
                </div>
            </>
        )
    }
}
