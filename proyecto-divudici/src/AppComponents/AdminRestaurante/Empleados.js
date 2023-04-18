import React from 'react'
import Hero from '../SharedComponents/Hero'
import Banner from '../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../SharedComponents/OpcionesView'
import { Component } from 'react'
import axios from 'axios'


export default class Empleados extends Component {

    constructor(props) {
        super(props)

        this.state = {
            empleados: [{
                cod_empleado: '',
                cedula: '',
                nombre: '',
                primerApellido: '',
                segundoApellido: '',
                telefono1: '',
                telefono2: '',
                cod_puesto: '',
                cod_nacionalidad: '',
            }],
            errorMsg: ''
        }
    }

    async getEmpleados() {
        await axios.get('https://localhost:44394/api/Empleado')
            .then(response => {
                response.data = JSON.parse(response.data);
                const empleados = response.data;
                this.setState({ empleados });
                console.table(empleados);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getEmpleados();
    }



    render() {

        const { empleados, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de Empleados"
                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
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
                                <th>cedula</th>
                                <th>nombre</th>
                                <th>primer apellido</th>
                                <th>segundo apellido</th>
                                <th>telefono1</th>
                                <th>telefono2</th>
                                <th>codigo puesto</th>
                                <th>codigo de la cod_nacionalidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                empleados.length ?
                                    empleados.map(empleado =>
                                        <tr key={empleado.codigo}>
                                            <td><div className="fila">EMP-{empleado.cod_empleado}</div></td>
                                            <td><div className="fila">{empleado.cedula}</div></td>
                                            <td><div className="fila">{empleado.nombre}</div></td>
                                            <td><div className="fila">{empleado.primerApellido}</div></td>
                                            <td><div className="fila">{empleado.segundoApellido}</div></td>
                                            <td><div className="fila">{empleado.telefono1}</div></td>
                                            <td><div className="fila">{empleado.telefono2}</div></td>
                                            <td><div className="fila">PUE-{empleado.cod_puesto}</div></td>
                                            <td><div className="fila">NAC-{empleado.cod_nacionalidad}</div></td>
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
                    <Link to="/agregar-empleado" className="btn-primary">agregar un empleado</Link>
                </div>

            </>
        )
    }
}
