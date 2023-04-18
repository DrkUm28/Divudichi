import React from 'react'
import Hero from '../../SharedComponents/Hero'
import Banner from '../../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../../SharedComponents/OpcionesView'
import TituloOpciones from '../../SharedComponents/TituloOpciones'
import axios from 'axios'
import { Component } from 'react'

export default class Especialidades extends Component {

    constructor(props) {
        super(props)

        this.state = {
            especialidades: [{
                cod_comida: '',
                nombre: '',
                precio: '',
                cod_tipoComestible: '',
                cod_unidadMedida: '',
                detalle: '',
                ingredientes: '',
                linea: '',
                clase: '',
                es_bufet: '',
                es_especialidad: ''
            }],
            errorMsg: ''
        }
    }

    async getEspecialidades() {
        await axios.get('https://localhost:44394/api/Comida')
            .then(response => {
                response.data = JSON.parse(response.data);
                const especialidades = response.data;
                this.setState({ especialidades });
                console.table(especialidades);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getEspecialidades();
    }

    render() {

        const { especialidades, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de Especialidades"
                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                        <Link to="/especiales" className="btn-primary">
                            Volver
                        </Link>
                    </Banner>
                </Hero>
                <br />
                <TituloOpciones titulo="Lista de especialidades" />
                <div className="col-md-12">
                    <table className="table table-light ">
                        <thead className="thead-light">
                            <tr>
                                <th>Codigo</th>
                                <th>nombre</th>
                                <th>precio</th>
                                <th>codigo de tipo de comestible</th>
                                <th>codigo de unidad de medida</th>
                                <th>detalle</th>
                                <th>ingredientes</th>
                                <th>linea</th>
                                <th>clase</th>
                                <th>Buffet</th>
                                <th>especialidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                especialidades.length ?
                                    especialidades.map(especialidad =>
                                        <tr key={especialidad.codigo}>
                                            <td><div className="fila">ESP-{especialidad.cod_comida}</div></td>
                                            <td><div className="fila">{especialidad.nombre}</div></td>
                                            <td><div className="fila">{especialidad.precio}</div></td>
                                            <td><div className="fila">TCO-{especialidad.cod_tipoComestible}</div></td>
                                            <td><div className="fila">{especialidad.cod_unidadMedida}</div></td>
                                            <td><div className="fila">{especialidad.detalle}</div></td>
                                            <td><div className="fila">{especialidad.ingredientes}</div></td>
                                            <td><div className="fila">{especialidad.linea}</div></td>
                                            <td><div className="fila">{especialidad.clase}</div></td>
                                            <td><div className="fila">{especialidad.es_bufet}</div></td>
                                            <td><div className="fila">{especialidad.es_especialidad}</div></td>
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
                        <Link to="/agregar-especialidad" className="btn-primary">Agregar platillo</Link>

                    </div>
                </div>
            </>
        )
    }
}
