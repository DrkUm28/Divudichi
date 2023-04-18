import React from 'react'
import Hero from '../../SharedComponents/Hero'
import Banner from '../../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../../SharedComponents/OpcionesView'
import TituloOpciones from '../../SharedComponents/TituloOpciones'
import axios from 'axios'
import { Component } from 'react'

export default class Bebidas extends Component {

    constructor(props) {
        super(props)

        this.state = {
            bebidas: [{
                cod_bebida: '',
                nombre: '',
                tipo: '',
                nacionalidad: '',
                marca: '',
                precio_unitario: '',
                precio_botella: '',
                cantidad: '',
                anio_cosecha: '',
                descripcion: '',
                proveedor: ''
            }],
            errorMsg: ''
        }
    }

    async getBebidas() {
        await axios.get('https://localhost:44394/api/Bebidas')
            .then(response => {
                response.data = JSON.parse(response.data);
                const bebidas = response.data;
                this.setState({ bebidas });
                console.table(bebidas);
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
            })
    }

    componentDidMount() {
        this.getBebidas();
    }

    render() {

        const { bebidas, errorMsg } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Pagina de bebidas"
                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                        <Link to="/especiales" className="btn-primary">
                            Volver
                    </Link>
                    </Banner>
                </Hero>
                <br />
                <TituloOpciones titulo="Lista de bebidas" />
                <div className="col-md-12">
                    <table className="table table-light ">
                        <thead className="thead-light">
                            <tr>
                                <th>Codigo</th>
                                <th>nombre</th>
                                <th>tipo</th>
                                <th>nacionalidad</th>
                                <th>marca</th>
                                <th>precio unitario</th>
                                <th>precio de botella</th>
                                <th>cantidad</th>
                                <th>año de cosecha</th>
                                <th>descripcion</th>
                                <th>proveedor</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                bebidas.length ?
                                    bebidas.map(bebida =>
                                        <tr key={bebida.codigo}>
                                            <td><div className="fila">BEB-{bebida.cod_bebida}</div></td>
                                            <td><div className="fila">{bebida.nombre}</div></td>
                                            <td><div className="fila">{bebida.tipo}</div></td>
                                            <td><div className="fila">{bebida.nacionalidad}</div></td>
                                            <td><div className="fila">{bebida.marca}</div></td>
                                            <td><div className="fila">{bebida.precio_unitario}</div></td>
                                            <td><div className="fila">{bebida.precio_botella}</div></td>
                                            <td><div className="fila">{bebida.cantidad}</div></td>
                                            <td><div className="fila">{bebida.anio_cosecha}</div></td>
                                            <td><div className="fila">{bebida.descripcion}</div></td>
                                            <td><div className="fila">PRO-{bebida.proveedor}</div></td>
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
                    <div className="services-center">
                        <Link to="/agregar-bebida" className="btn-primary">Agregar bebida</Link>
                        <Link to="/agregar-vino" className="btn-primary">Agregar Vino</Link>
                        <Link to="/agregar-gaseosa" className="btn-primary">Agregar Gaseosa</Link>
                        <Link to="/agregar-licor" className="btn-primary">Agregar Licor</Link>
                    </div>
                </div>



            </>
        )
    }
}
