import React from 'react'
import Hero from '../../SharedComponents/Hero'
import Banner from '../../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../../SharedComponents/OpcionesView'
import TituloOpciones from '../../SharedComponents/TituloOpciones'
import axios from 'axios'
import { Component } from 'react'

export default class DesechablesYEmpaques extends Component {

    constructor(props) {
        super(props)

        this.state = {
            desechables: [{
                cod_empaque: '',
                cod_restaurante: '',
                nombre: '',
                cod_marca: '',
                descripcion: '',
                cantidad: ''
            }],
            errorMsg: ''
        }
    }

    async getDesechablesYEmpaques() {
        await axios.get('https://localhost:44394/api/Desechable')
            .then(response => {
                response.data = JSON.parse(response.data);
                const desechables = response.data;
                this.setState({ desechables });
                console.table(desechables);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getDesechablesYEmpaques();
    }

    render() {

        const { desechables, errorMsg } = this.state;

        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de desechables y empaques"
                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                        <Link to="/productos" className="btn-primary">
                            Volver
                        </Link>
                    </Banner>
                </Hero>
                <br />
                <TituloOpciones titulo="Lista de Desechables" />
                <div className="col-md-12">
                    <table className="table table-light ">
                        <thead className="thead-light">
                            <tr>
                                <th>Codigo</th>
                                <th>Codigo de restaurante</th>
                                <th>Nombre</th>
                                <th>Codigo de marca</th>
                                <th>Descripcion</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                desechables.length ?
                                    desechables.map(desechable =>
                                        <tr key={desechable.codigo}>
                                            <td><div className="fila">EMP-{desechable.cod_empaque}</div></td>
                                            <td><div className="fila">RES-{desechable.cod_restaurante}</div></td>
                                            <td><div className="fila">{desechable.nombre}</div></td>
                                            <td><div className="fila">MAR-{desechable.cod_marca}</div></td>
                                            <td><div className="fila">{desechable.descripcion}</div></td>
                                            <td><div className="fila">{desechable.cantidad}</div></td>
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
                        <Link to="/agregar-desechable-y-empaque" className="btn-primary">Agregar desechable o empaque</Link>

                    </div>
                </div>



            </>
        )
    }
}
