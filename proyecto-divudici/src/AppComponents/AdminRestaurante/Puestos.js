import React from 'react'
import Hero from '../SharedComponents/Hero'
import Banner from '../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../SharedComponents/OpcionesView'
import axios from 'axios'
import { Component } from 'react'

export default class Puestos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            puestos: [{
                cod_puesto: '',
                cod_rol: '',
                nombre: '',
                interno_restaurante: '',
                externo_restaurante: ''
            }],
            errorMsg: ''
        }
    }

    async getPuestos() {
        await axios.get('https://localhost:44394/api/Puesto')
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

        const { puestos, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de Puestos"
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
                                <th>Codigo Puesto</th>
                                <th>codigo rol</th>
                                <th>nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                puestos.length ?
                                    puestos.map(puesto =>
                                        <tr key={puesto.codigo}>
                                            <td><div className="fila">PUE-{puesto.cod_puesto}</div></td>
                                            <td><div className="fila">ROL-{puesto.cod_rol}</div></td>
                                            <td><div className="fila">{puesto.nombre}</div></td>
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
                    <Link to="/agregar-puesto" className="btn-primary">agregar un puesto</Link>
                </div>
            </>
        )
    }
}

