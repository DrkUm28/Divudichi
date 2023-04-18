import React, { Component } from 'react'
import List from 'material-ui/List'
import ListItem from 'material-ui/List/ListItem'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
export default class Resumen extends Component {
    render() {
        const { values: { name, value, endValue } } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <div className="contenedor-lista">
                        <ListItem
                            primaryText="Nombre del restaurante"
                            secondaryText={name}
                        />
                        <ListItem
                            primaryText="Monto de apertura"
                            secondaryText={value}
                        />
                        <ListItem
                            primaryText="Monto de cierre"
                            secondaryText={endValue}
                        />
                    </div>
                </>
            </MuiThemeProvider>
        )
    }
}
