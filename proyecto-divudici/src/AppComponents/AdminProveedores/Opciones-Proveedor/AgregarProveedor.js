import React, { Component } from 'react'
import Hero from '../../SharedComponents/Hero'
import Banner from '../../SharedComponents/Banner'
import { Link } from 'react-router-dom'
import OpcionesView from '../../SharedComponents/OpcionesView'
import TituloOpciones from '../../SharedComponents/TituloOpciones'
import axios from 'axios'


export default class AgregarProveedor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nombre: "",
            cedula: "",
            fecha: "",
            primer_apellido: "",
            segundo_apellido: "",
            correo: "",
            direccion: "",
            telefono_oficina: "",
            fax: "",
            celular: '',
            productos_manejados: "",
            nombre_contacto: "",
            tel_contacto: "",
            direccion_contacto: ""
        };
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);

        /*aca se esta generando el post request al api, como primer parametro se le pasara la url del api
            y como segundo parametro se le pasan los datos que se quieran mandar al api, por lo que se le pasa el current
            state*/
        axios
            .post("https://localhost:44394/api/Proveedor", this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        const { nombre, cedula, fecha, primer_apellido, segundo_apellido, correo, direccion, telefono_oficina,
            fax, celular, productos_manejados, nombre_contacto, tel_contacto, direccion_contacto } = this.state;
        return (
            <>
                <Hero hero="restaurantHero">
                    <Banner title="Agregar nuevo proveedor"
                        subtitle="Por favor ingrese todos los campos">
                        <Link to="/lista-proveedores" className="btn-primary">
                            Volver
                    </Link>
                    </Banner>
                </Hero>
            </>
        )
    }
}
