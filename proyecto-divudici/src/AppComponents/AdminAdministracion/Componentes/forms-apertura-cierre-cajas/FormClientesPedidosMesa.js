import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class FormClientesPedidosMesa extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             cod_cliente: '',
             nombre_cliente: '',
             restaurante: '',
             precioPedido1: 0,
             precioPedido2: 0,
             precioPedido3: 0,
             precioPedido4: 0,
             isBufet1: false,
             isBufet2: false,
             isBufet3: false,
             isBufet4: false
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
                        <label>Restaurante: </label> 
                        <input 
                            type="text"
                            value={this.state.restaurante} //readOnly
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    <hr/>

                    <div>
                    <label>Pedido silla 1: </label> 
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="carne">Carne</option>
                            <option value="pollo">Pollo</option>
                            <option value="cerdo">Cerdo</option>
                            <option value="pescado">Pescado</option>
                        </select>
                        <input 
                            type="number"
                            value={this.state.precioPedido1} //readOnly
                            onChange={this.handleChange}
                        />
                        <input
                            name="isBufet"
                            type="checkbox"
                            checked={this.state.isBufet1}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                    <label>Pedido silla 2: </label> 
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="carne">Carne</option>
                            <option value="pollo">Pollo</option>
                            <option value="cerdo">Cerdo</option>
                            <option value="pescado">Pescado</option>
                        </select>
                        <input 
                            type="number"
                            value={this.state.precioPedido2} //readOnly
                            onChange={this.handleChange}
                        />
                        <input
                            name="isBufet"
                            type="checkbox"
                            checked={this.state.isBufet2}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                    <label>Pedido silla 3: </label> 
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="carne">Carne</option>
                            <option value="pollo">Pollo</option>
                            <option value="cerdo">Cerdo</option>
                            <option value="pescado">Pescado</option>
                        </select>
                        <input 
                            type="number"
                            value={this.state.precioPedido3} //readOnly
                            onChange={this.handleChange}
                        />
                        <input
                            name="isBufet"
                            type="checkbox"
                            checked={this.state.isBufet3}
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                    <label>Pedido silla 4: </label> 
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="carne">Carne</option>
                            <option value="pollo">Pollo</option>
                            <option value="cerdo">Cerdo</option>
                            <option value="pescado">Pescado</option>
                        </select>
                        <input 
                            type="number"
                            value={this.state.precioPedido4} //readOnly
                            onChange={this.handleChange}
                        />
                        <input
                            name="isBufet"
                            type="checkbox"
                            checked={this.state.isBufet4}
                            onChange={this.handleChange} 
                        />
                    </div>`
                    <div>
                        <RaisedButton
                            label="Validar"
                            style={styles.button}
                            onClick={validarCampos}
                        />
                    </div>
                </form>
            </MuiThemeProvider>
        )
    } 
}

