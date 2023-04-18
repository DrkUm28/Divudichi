import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import ListItem from 'material-ui/List/ListItem'
export default class FormApertura extends Component {

    continue = e => {
        e.preventDefault();
        this.props.next();
    }

    back = e => {
        e.preventDefault();
        this.props.previous();
    }

    render() {

        const { values: { name } } = this.props;
        const { values, handleChange, validarCamposCierre } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <div className="contenedor-fields">
                        <ListItem
                            primaryText="nombre del restaurante"
                            secondaryText={name}

                        />
                    </div>
                    <div className="contenedor-fields">
                        <TextField
                            hintText="introduzca el monto de cierre"
                            floatingLabelText="Cierre de caja"
                            onChange={handleChange('endValue')}
                            defaultValue={values.endValue}
                        />
                    </div>
                    <div className="contenedor-botones">
                        <RaisedButton
                            label="Aceptar"
                            style={styles.button}
                            disabled={values.booleano2}
                            onClick={this.continue}
                        />
                    </div>

                    <div className="contenedor-botones">
                        <RaisedButton
                            label="Validar"
                            style={styles.button}
                            onClick={validarCamposCierre}

                        />
                    </div>
                    <div className="contenedor-botones">
                        <RaisedButton
                            label="Atras"
                            style={styles.button}
                            onClick={this.back}

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