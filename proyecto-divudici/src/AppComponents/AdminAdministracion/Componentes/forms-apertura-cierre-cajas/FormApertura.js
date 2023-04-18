import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
export default class FormApertura extends Component {

    continue = e => {
        e.preventDefault();
        this.props.next();
    }

    clean = e => {
        e.preventDefault();
        this.props.borrar();
    }

    render() {

        const { values, handleChange, validarCampos } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <div className="contenedor-fields">
                        <TextField
                            hintText="nombre del restaurante"
                            floatingLabelText="Restaurante"
                            onChange={handleChange('name')}
                            defaultValue={values.name}

                        />
                    </div>
                    <div className="contenedor-fields">
                        <TextField
                            hintText="introduzca el monto de apertura"
                            floatingLabelText="Apertura de caja"
                            onChange={handleChange('value')}
                            defaultValue={values.value}
                        />
                    </div>
                    <div className="contenedor-botones">
                        <RaisedButton
                            label="Aceptar"
                            style={styles.button}
                            onClick={this.continue}
                            disabled={values.booleano}
                        />
                    </div>
                    <div className="contenedor-botones">
                        <RaisedButton
                            label="Validar"
                            style={styles.button}
                            onClick={validarCampos}
                        />
                    </div>
                </>
            </MuiThemeProvider>
        )
    }
}


const styles = {
    button: {
        margin: 20
    }
}