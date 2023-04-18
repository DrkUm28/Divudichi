import React from 'react'
import Hero from '../../SharedComponents/Hero'
import Banner from '../../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../../SharedComponents/OpcionesView'
import TituloOpciones from '../../SharedComponents/TituloOpciones'
import axios from 'axios'
import { Component } from 'react'

export default class Tecnologia extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tecnologias: [{
                cod_tecnologia: '',
                nombre: '',
                cantidad: '',
                precio: '',
                cod_restaurante: '',
                cod_marca: '',
                descripcion: '',
                proveedor: ''
            }],
            errorMsg: ''
        }
    }

    async getTecnologia() {
        await axios.get('https://localhost:44394/api/Tecnologia')
            .then(response => {
                response.data = JSON.parse(response.data);
                const tecnologias = response.data;
                this.setState({ tecnologias });
                console.table(tecnologias);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getTecnologia();
    }

    render() {
        const { tecnologias, errorMsg } = this.state;

        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="articulos tecnologicos"
                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                        <Link to="/productos" className="btn-primary">
                            Volver
                        </Link>
                    </Banner>
                </Hero>
                <br />
                <TituloOpciones titulo="Lista de articulos de limpieza" />
                <div className="col-md-12">
                    <table className="table table-light ">
                        <thead className="thead-light">
                            <tr>
                                <th>Codigo</th>
                                <th>nombre de equipo</th>
                                <th>cantidad</th>
                                <th>precio</th>
                                <th>codigo de restaurante</th>
                                <th>codigo de marca</th>
                                <th>Descripcion</th>
                                <th>codigo de proveedor</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                tecnologias.length ?
                                    tecnologias.map(tecnologia =>
                                        <tr key={tecnologia.codigo}>
                                            <td><div className="fila">{tecnologia.cod_tecnologia}</div></td>
                                            <td><div className="fila">{tecnologia.nombre}</div></td>
                                            <td><div className="fila">{tecnologia.cantidad}</div></td>
                                            <td><div className="fila">{tecnologia.precio}</div></td>
                                            <td><div className="fila">RES-{tecnologia.cod_restaurante}</div></td>
                                            <td><div className="fila">MAR-{tecnologia.cod_marca}</div></td>
                                            <td><div className="fila">{tecnologia.descripcion}</div></td>
                                            <td><div className="fila">{tecnologia.proveedor}</div></td>
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
                        <Link to="/agregar-tecnologia" className="btn-primary">Agregar articulo tecnologico</Link>

                    </div>
                </div>
            </>
        )
    }
}
