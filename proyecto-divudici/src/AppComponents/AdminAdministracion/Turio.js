import React, { Component } from 'react'
import Sidebar from './Componentes/Sidebar'
import MainView from './Componentes/MainView'
import Producto from './Componentes/Productos'

const items = [
    { name: 'mesas', label: 'Mesas',
    items: [{ name: 'mlibres', label: 'Mesas Libres='},
            { name: 'mocupadas',label: 'Mesas Ocupadas='},
            { name: 'mtotales', label: 'Total= 23'},   ],},
    { name: 'reservado', label: 'Reservado',
    items: [{name: 'reservados', label: 'Reservadas='},
            {name: 'noReservado', label: 'No Reservadas='},
            {name: 'total', label: 'Total= 23'},],},

    { name: 'clientes', label: 'Clientes',
    items: [{ name: 'clmesas', label: 'Clientes'},
            { name: 'barra', label: 'Barra'},
            { name: 'reservaciones', label: 'Reservaciones'},],},
    { name: 'producto', label: 'Producto'},]

export default class Turio extends Component {
    render() {
        return (
            <div className="integracion">
                <Sidebar items= {items}/>
                <MainView/>
                <Producto/>
            </div>
        )
    }
}
