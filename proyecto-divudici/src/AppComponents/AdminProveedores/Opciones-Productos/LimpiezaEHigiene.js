import React from 'react'
import Hero from '../../SharedComponents/Hero'
import Banner from '../../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../../SharedComponents/OpcionesView'
import TituloOpciones from '../../SharedComponents/TituloOpciones'
import axios from 'axios'
import { Component } from 'react'

export default class LimpiezaEHigiene extends Component {

    constructor(props) {
        super(props)

        this.state = {
            articulos: [{
                cod_limpieza: '',
                cod_restaurante: '',
                nombre: '',
                cod_marca: '',
                cantidad: '',
                descripcion: '',
                liquido: '',
                tipo: '',
                cantidadMedida: '',
                cod_unidadMedida: ''
            }],
            errorMsg: ''
        }
    }

    async getLimpieza() {
        await axios.get('https://localhost:44394/api/Limpieza')
            .then(response => {
                response.data = JSON.parse(response.data);
                const limpieza = response.data;
                this.setState({ limpieza });
                console.table(limpieza);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getLimpieza();
    }

    render() {
        const { articulos, errorMsg } = this.state;

        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="articulos de limpieza y higiene"
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
                                <th>Codigo del restaurante</th>
                                <th>nombre</th>
                                <th>Codigo de marca</th>
                                <th>cantidad</th>
                                <th>descripcion</th>
                                <th>liquido</th>
                                <th>cantidadMedida</th>
                                <th>Codigo de Unidad de medida </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                articulos.length ?
                                    articulos.map(limpieza =>
                                        <tr key={limpieza.codigo}>
                                            <td><div className="fila">LIM-{limpieza.cod_limpieza}</div></td>
                                            <td><div className="fila">RES-{limpieza.cod_restaurante}</div></td>
                                            <td><div className="fila">{limpieza.nombre}</div></td>
                                            <td><div className="fila">MAR-{limpieza.cod_marca}</div></td>
                                            <td><div className="fila">{limpieza.cantidad}</div></td>
                                            <td><div className="fila">{limpieza.descripcion}</div></td>
                                            <td><div className="fila">{limpieza.liquido}</div></td>
                                            <td><div className="fila">{limpieza.cantidadMedida}</div></td>
                                            <td><div className="fila">UNI-{limpieza.cod_unidadMedida}</div></td>
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
                        <Link to="/agregar-limpieza" className="btn-primary">Agregar articulo de limpieza</Link>

                    </div>
                </div>
            </>
        )
    }
}

