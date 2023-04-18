import React from 'react'
import Hero from '../SharedComponents/Hero'
import Banner from '../SharedComponents/Banner'
import {Link} from 'react-router-dom'
import OpcionesView from '../SharedComponents/OpcionesView'

export default function Especiales() {
    return (
        <>
        <Hero hero = "restaurantHero">
            <Banner title = "Especiales"
                    subtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                <Link to = "/restaurantes" className = "btn-primary">
                    Volver 
                </Link>
            </Banner>
        </Hero>
            <br/>
        <OpcionesView/>
        <div className="services-center">
            <Link to = "/especialidades" className = "btn-primary">Especialidades</Link>
            <Link to = "/buffet" className = "btn-primary">Buffet</Link>
            <Link to = "/bebidas" className = "btn-primary">Bebidas</Link>
        </div>
        
        </>
    )
}
