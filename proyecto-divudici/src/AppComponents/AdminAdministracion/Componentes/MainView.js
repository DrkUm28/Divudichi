import React, { Component } from 'react'
import Apertura from './Apertura'

export default class MainView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "Abierta"
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        })
        console.log(this.state.selectedOption)
    };

    render() {
        return (
            <>
                <div className="background-restaurante">
                    <Apertura />
                    <div className="contenedor-de-mesas">
                        <ul className="table-container">
                            <li className="mesa">mesa 1</li>
                            <li className="mesa">mesa 2</li>
                            <li className="mesa">mesa 3</li>
                        </ul>
                        <ul className="long-table-container">
                            <li className="long-table">mesa 4</li>
                            <li className="long-table">mesa 5</li>
                            <li className="long-table">mesa 7</li>
                            <li className="long-table">mesa 8</li>
                        </ul>
                        <ul className="table-container">
                            <li className="mesa">mesa 9</li>
                            <li className="mesa">mesa 10</li>
                            <li className="mesa">mesa 11</li>
                        </ul>
                        <ul className="table-container">
                            <li className="mesa">mesa 12</li>
                            <li className="mesa">mesa 13</li>
                            <li className="mesa">mesa 14</li>
                        </ul>
                        <ul className="long-table-container">
                            <li className="long-table">mesa 15</li>
                            <li className="long-table">mesa 16</li>
                            <li className="long-table">mesa 17</li>
                            <li className="long-table">mesa 18</li>
                        </ul>
                        <ul className="table-container">
                            <li className="mesa">mesa 19</li>
                            <li className="mesa">mesa 20</li>
                            <li className="mesa">mesa 21</li>
                        </ul>
                        <ul className="short-table-container">
                            <li className="mesa">mesa 22</li>
                            <li className="mesa">mesa 23</li>
                        </ul>
                        <div className="contenedor-barras">
                            <form>
                                <legend>Control barras</legend>
                                <div className="form-check">
                                    <label>
                                        <input
                                            type="radio"
                                            name="react-tips"
                                            value="Cerrada"
                                            onChange={this.handleOptionChange}
                                            className="form-check-input"
                                        />
                                        Cerrada
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label>
                                        <input
                                            type="radio"
                                            name="react-tips"
                                            value="Abierta"
                                            onChange={this.handleOptionChange}
                                            className="form-check-input"
                                        />
                                        Abierta
                                    </label>
                                </div>
                            </form>
                            <div className="barra-baja-restaurantes-peques">
                                {'barra ' + this.state.selectedOption}
                            </div>
                        </div>
                        <div className="barra-alta-restaurantes-peques">
                            {'Barra ' + this.state.selectedOption}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
