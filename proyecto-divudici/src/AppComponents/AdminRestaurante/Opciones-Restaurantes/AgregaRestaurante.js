import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../SharedComponents/Banner'
import Hero from '../../SharedComponents/Hero'
import axios from 'axios'
import { Component } from 'react'


export default class AgregaRestaurante extends Component {

    constructor(props) {
        super(props)

        this.changeHandler = this.changeHandler.bind(this);
    }
    state = {
        nombre: '',
        direccion: '',
        telefono: 0,
        activo: true,
        cant_clientes: 0,
        especialidad: ''
    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    /*submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);

        fetch('https://localhost:44394/api/Restaurante', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(
                nombre,
                ),
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

    };*/

    /*
    async submitHandler() {
        const object = {
            nombre: this.state.nombre,
            direccion: this.state.direccion,
            telefono: this.state.telefono,
            activo: this.state.activo,
            cant_clientes: this.state.cant_clientes,
            especialidad: this.state.especialidad
        }
        try {
            let result = await fetch('https://localhost:44394/api/Restaurante', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(object)
            });
            console.log(result)
        } catch (e) {
            console.log(e)
        }
    }
*/
    /*
    submitHandler = (e) => {
        e.preventDefault();

        console.log(object);

        axios.post('https://localhost:44394/api/Restaurante',
            {
                nombre: this.state.nombre,
                direccion: this.state.direccion,
                telefono: this.state.telefono,
                activo: this.state.activo,
                cant_clientes: this.state.cant_clientes,
                especialidad: this.state.especialidad
            },
            {
                headers:
                {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(response => {
                console.log(response)
            })
            .catch(error => {   
                console.log("error: " + error.response)
            })
        this.setState({
            nombre: '',
            direccion: '',
            telefono: 0,
            activo: true,
            cant_clientes: 0,
            especialidad: ''
        })
    }*/

    /*
        postData(e) {
            e.preventDefault();
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "https://localhost:44394/api/Restaurante", true);
    
            const data = {
                nombre: this.state.nombre,
                direccion: this.state.direccion,
                telefono: this.state.telefono,
                activo: this.state.activo,
                cant_clientes: this.state.cant_clientes,
                especialidad: this.state.especialidad
            };
    
            console.log(data);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', '*');
            xhr.send(JSON.stringify(data));
    
            xhr.onload = () => {
                console.log(xhr.responseText);
            }
        }*/

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post("https://localhost:44394/api/Restaurante", this.state)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.data)
            })
    }

    render() {
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Agregar un nuevo restaurante"
                        subtitle="Por favor ingrese todos los campos">
                        <Link to="/lista-restaurantes" className="btn-primary">
                            Volver
                            </Link>
                    </Banner>
                </Hero>
                <br />
                <div className="services">
                    <div className="formulario">
                        <form className="form-horizontal" onSubmit={this.submitHandler}>
                            <fieldset>
                                <legend>Nuevo Restaurante</legend>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="codigo">Codigo </label>
                                    <div className="col-md-4">
                                        <input id="codigo" name="codigo" type="text" placeholder="" className="form-control input-md" required="" disabled />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="nombre">Nombre</label>
                                    <div className="col-md-4">
                                        <input id="nombre"
                                            name="nombre"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={this.state.nombre}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="direccion">Direccion</label>
                                    <div className="col-md-4">
                                        <input id="direccion"
                                            name="direccion"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={this.state.direccion}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="especialidad">Especialidad</label>
                                    <div className="col-md-4">
                                        <input id="especialidad"
                                            name="especialidad"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={this.state.especialidad}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="telefono">Telefono</label>
                                    <div className="col-md-4">
                                        <input id="telefono"
                                            name="telefono"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={this.state.telefono}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor="cant_clientes">Cantidad de Clientes</label>
                                    <div className="col-md-4">
                                        <input id="cant_clientes"
                                            name="cant_clientes"
                                            type="text"
                                            placeholder=""
                                            className="form-control input-md"
                                            required=""
                                            value={this.state.cant_clientes}
                                            onChange={this.changeHandler} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-md-4 control-label" htmlFor=""></label>
                                    <div className="col-md-4">
                                        <div className="checkbox">
                                            <label htmlFor="-0">
                                                <input
                                                    type="checkbox"
                                                    name=""
                                                    id="checkbox"
                                                    value="1"
                                                />

                                                        Activo
                                                    </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-8">
                                        <button id="salvar" name="salvar" className="btn btn-success">Salvar</button>
                                        <button id="cancelar" name="cancelar" className="btn btn-danger"> Cancelar</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
