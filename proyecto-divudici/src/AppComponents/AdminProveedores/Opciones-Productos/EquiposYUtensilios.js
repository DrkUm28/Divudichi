import React from 'react'
import Hero from '../../SharedComponents/Hero'
import Banner from '../../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../../SharedComponents/OpcionesView'
import TituloOpciones from '../../SharedComponents/TituloOpciones'
import axios from 'axios'
import { Component } from 'react'

export default class EquiposYUtensilios extends Component {

    constructor(props) {
        super(props)

        this.state = {
            equipos: [{
                cod_equipo: '',
                cod_restaurante: '',
                nombre: '',
                cod_marca: '',
                cantidad: '',
                descripcion: '',
                proveedor: ''
            }],
            errorMsg: ''
        }
    }

    async getEquipos() {
        await axios.get('https://localhost:44394/api/Utensilios')
            .then(response => {
                response.data = JSON.parse(response.data);
                const equipos = response.data;
                this.setState({ equipos });
                console.table(equipos);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getEquipos();
    }

    render() {

        const { equipos, errorMsg } = this.state;

        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Equipos y utensilios"
                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                        <Link to="/productos" className="btn-primary">
                            Volver
                </Link>
                    </Banner>
                </Hero>
                <br />
                <TituloOpciones titulo="Lista de equipos y utensilios" />
                <div className="col-md-12">
                    <table className="table table-light ">
                        <thead className="thead-light">
                            <tr>
                                <th>Codigo</th>
                                <th>Codigo de restaurante</th>
                                <th>Nombre</th>
                                <th>Codigo de marca</th>
                                <th>Cantidad</th>
                                <th>Descripcion</th>
                                <th>Codigo de proveedor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                equipos.length ?
                                    equipos.map(equipo =>
                                        <tr key={equipo.codigo}>
                                            <td><div className="fila">EQU-{equipo.cod_equipo}</div></td>
                                            <td><div className="fila">RES-{equipo.cod_restaurante}</div></td>
                                            <td><div className="fila">{equipo.nombre}</div></td>
                                            <td><div className="fila">MAR-{equipo.cod_marca}</div></td>
                                            <td><div className="fila">{equipo.cantidad}</div></td>
                                            <td><div className="fila">{equipo.descripcion}</div></td>
                                            <td><div className="fila">PRO-{equipo.proveedor}</div></td>
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
                <br />
                <OpcionesView />
                <div className="services">
                    <div className="services">
                        <Link to="/agregar-equipo" className="btn-primary">Agregar nuevo equipo o utensilio</Link>

                    </div>
                </div>



            </>
        )
    }
}
