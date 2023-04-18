import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class FormAddClientesBarra extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             cod_cliente: '',
             nombre_cliente: '',
             monto_pago: 0,
             restaurante: '',
             hora_entrada: '',
             hora_salida: '',
             duracion_barra: '',
             pedido: '',
             precio: '',
             numero_silla: '',
             estado_cuenta: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <MuiThemeProvider>
                <form>
                    <div>
                        <label>Código del cliente: </label>
                        <input 
                            type="text" 
                            value={this.state.cod_cliente}  //readOnly
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Nombre del cliente: </label>
                        <input 
                            type="text"
                            value={this.state.nombre_cliente}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Monto pago: </label>
                        <input 
                            type="number"
                            value={this.state.monto_pago}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Restaurante: </label> 
                        <input 
                            type="text"
                            value={this.state.restaurante} //readOnly
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Hora de entrada: </label> 
                        <input 
                            type="text"
                            value={this.state.hora_entrada} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Hora de salida: </label> 
                        <input 
                            type="text"
                            value={this.state.hora_salida} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Duración en la barra: </label> 
                        <input 
                            type="text"
                            value={this.state.duracion_barra} 
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                    <label>Pedido: </label> 
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="carne">Carne</option>
                            <option value="pollo">Pollo</option>
                            <option value="cerdo">Cerdo</option>
                            <option value="pescado">Pescado</option>
                        </select>
                    </div>

                    <div>
                        <label>Precio: </label> 
                        <input 
                            type="number"
                            value={this.state.precio} //readOnly 
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label>Número de silla: </label> 
                        <input 
                            type="number"
                            value={this.state.numero_silla} //readOnly 
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label>Estado de la cuenta: </label> 
                        <input 
                            type="text"
                            value={this.state.estado_cuenta} //readOnly 
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <div className="contenedor-botones">
                        <RaisedButton
                            label="Validar"
                        />
                    </div>
                </form>
            </MuiThemeProvider>    
        )
    }
}

