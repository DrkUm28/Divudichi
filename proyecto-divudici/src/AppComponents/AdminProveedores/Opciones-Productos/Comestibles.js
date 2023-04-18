import React from 'react'
import Hero from '../../SharedComponents/Hero'
import Banner from '../../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../../SharedComponents/OpcionesView'
import TituloOpciones from '../../SharedComponents/TituloOpciones'
import axios from 'axios'
import { Component } from 'react'

export default class Comestibles extends Component {

    constructor(props) {
        super(props)

        this.state = {
            comestibles: [{
                cod_claseComestible: '',
                nombre: ''
            }],
            errorMsg: ''
        }
    }

    async getComestibles() {
        await axios.get('https://localhost:44394/api/ComestibleClase')
            .then(response => {
                response.data = JSON.parse(response.data);
                const comestibles = response.data;
                this.setState({ comestibles });
                console.table(comestibles);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getComestibles();
    }

    render() {
        const { comestibles, errorMsg } = this.state;

        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de comestibles"
                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                        <Link to="/productos" className="btn-primary">
                            Volver
                        </Link>
                    </Banner>
                </Hero>
                <br />
                <TituloOpciones titulo="Lista de comestibles" />
                <div className="col-md-12">
                    <table className="table table-light ">
                        <thead className="thead-light">
                            <tr>
                                <th>Codigo</th>
                                <th>nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                comestibles.length ?
                                    comestibles.map(comestible =>
                                        <tr key={comestible.codigo}>
                                            <td><div className="fila">{comestible.cod_claseComestible}</div></td>
                                            <td><div className="fila">{comestible.nombre}</div></td>
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
                        <Link to="/agregar-comestible" className="btn-primary">Agregar comestible</Link>

                    </div>
                </div>
            </>
        )
    }
}
