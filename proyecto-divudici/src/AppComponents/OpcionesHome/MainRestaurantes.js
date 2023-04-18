
import Hero from '../SharedComponents/Hero'
import Banner from '../SharedComponents/Banner'
import {Link} from 'react-router-dom'
import OpcionesView from '../SharedComponents/OpcionesView'

import React, { Component } from 'react'

export default class MainRestaurantes extends Component {
    
    state = {
        servicios :[
            {
                icon:'',
                name:'Especiales',
                path:"/especiales"
            },
            {
                icon:'',
                name:'Mesas',
                path:"/mesas"
            },
            {
                icon:'',
                name:'Empleados',
                path:"/empleados"
            },
            {
                icon:'',
                name:'Puestos',
                path:"/puestos"
            },{
                icon:'',
                name:'Restaurantes',
                path:"/lista-restaurantes"
            }
        ]
    }
    
    render() {
        return (
            
            <React.Fragment>
                <Hero hero = "restaurantHero">
                    <Banner title = "Pagina de restaurantes">
                        <Link to = "/" className = "btn-primary">
                            Inicio
                        </Link>
                    </Banner>
                </Hero>
                <br/>
                <OpcionesView/>
                <div className="services">
                    <div className="services-center">
                        {this.state.servicios.map((item, index)=>{
                            return <Link to = {item.path} className = "btn-primary">
                            <article key ={index} className = "services">
                                <span>{item.icon}</span>
                                <p>{item.name}</p>
                            </article>
                            </Link>
                        })}
                    </div>
                </div>
            </React.Fragment>
    
            /*aqui se va a poner la opcion de agregar un nuevo
            restaurante al negocio, y tambien se pondra un redireccionamiento
            para la administracion del restaurante. el cual tiene las opciones de:
                
                especiales
                mesas
                empleados
                puestos
    
            */
        )
    }
}
