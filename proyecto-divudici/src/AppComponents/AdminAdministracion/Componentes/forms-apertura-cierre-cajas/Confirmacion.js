import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'


export default class Confirmacion extends Component {

    continue = e => {
        e.preventDefault();
        this.props.next();
    }

    back = e => {
        e.preventDefault();
        this.props.previous();
    }

    render() {
        return (
            <MuiThemeProvider>
                <h6>desea cerrar la caja?</h6>
                <div className="contenedor-botones">
                    <RaisedButton
                        label="Aceptar"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </div>
                <div className="contenedor-botones">
                    <RaisedButton
                        label="Atras"
                        style={styles.button}
                        onClick={this.back}
                    />
                </div>
            </MuiThemeProvider>
        )
    }
}


const styles = {
    button: {
        margin: 20
    }
}