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
                name:'comestibles',
                path:"/comestibles"
            },
            {
                icon:'',
                name:'desechables y empaques',
                path:"/desechables-y-empaques"
            },
            {
                icon:'',
                name:'limpieza e higiene',
                path:"/limpieza-e-higiene"
            },
            {
                icon:'',
                name:'tecnologia',
                path:"/tecnologia"
            },
            {
                icon:'',
                name:'equipos y utensilios',
                path:"/equipos-y-utensilios"
            }
        ]
    }
    
    render() {
        return (
            
            <React.Fragment>
                <Hero hero = "restaurantHero">
                    <Banner title = "Pagina de restaurantes">
                        <Link to = "/proveedores" className = "btn-primary">
                            volver
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
        )
    }
}
