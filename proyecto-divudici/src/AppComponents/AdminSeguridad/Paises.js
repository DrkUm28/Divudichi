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
            paises: [{
                cod_pais: '',
                nombre: ''
            }],
            errorMsg: ''
        }
    }

    async getPais() {
        await axios.get('https://localhost:44394/api/Pais')
            .then(response => {
                response.data = JSON.parse(response.data);
                const paises = response.data;
                this.setState({ paises });
                console.table(paises);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getPais();
    }


    render() {

        const { paises, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de nacionalidades"
                        subtitle="Aqui se pueden ver las diferentes nacionalidades del sistema">
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
                                <th>nombre del pais</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paises.length ?
                                    paises.map(pais =>
                                        <tr key={pais.codigo}>
                                            <td><div className="fila">PAI-{pais.cod_pais}</div></td>
                                            <td><div className="fila">{pais.nombre}</div></td>
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
                    <Link to="/agregar-pais" className="btn-primary">agregar una nueva nacionalidad</Link>
                </div>
            </>
        )
    }
}
