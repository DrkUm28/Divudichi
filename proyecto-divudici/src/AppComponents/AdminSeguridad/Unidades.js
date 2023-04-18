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
            unidades: [{
                cod_unidadMedida: '',
                unidad_medida: '',
                escala: '',
                tipo_unidad: '',
                simbologia: ''
            }],
            errorMsg: ''
        }
    }

    async getUnidades() {
        await axios.get('')
            .then(response => {
                response.data = JSON.parse(response.data);
                const unidades = response.data;
                this.setState({ unidades });
                console.table(unidades);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getUnidades();
    }


    render() {

        const { unidades, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de Unidas de medida"
                        subtitle="Aqui se pueden ver una lista de las unidades de medida que se manejan en el sistema">
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
                                <th>unidad de medida</th>
                                <th>escala</th>
                                <th>tipo de unidad</th>
                                <th>simbologia</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                unidades.length ?
                                    unidades.map(unidad =>
                                        <tr key={unidad.codigo}>
                                            <td><div className="fila">UNI-{unidad.cod_unidadMedida}</div></td>
                                            <td><div className="fila">{unidad.unidad_medida}</div></td>
                                            <td><div className="fila">{unidad.escala}</div></td>
                                            <td><div className="fila">{unidad.tipo_unidad}</div></td>
                                            <td><div className="fila">{unidad.simbologia}</div></td>
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
                    <Link to="/agregar-unidad" className="btn-primary">agregar una unidad de medida</Link>
                </div>
            </>
        )
    }
}
