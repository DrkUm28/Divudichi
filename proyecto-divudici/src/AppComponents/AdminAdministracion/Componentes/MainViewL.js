import React from 'react'
import Apertura from './Apertura'



import { Component } from 'react'

export default class MainViewL extends Component {

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
            <div className="background-restaurante-L">
                <Apertura />
                <div className="contenedor-de-mesas-L">
                    <ul className="long-table-container-L">
                        <li className="long-table-L">mesa 1</li>
                        <li className="long-table-L">mesa 2</li>
                        <li className="long-table-L">mesa 3</li>
                        <li className="long-table-L">mesa 4</li>
                        <li className="long-table-L">mesa 5</li>
                    </ul>
                    <ul className="long-table-container-L">
                        <li className="long-table-L">mesa 6</li>
                        <li className="long-table-L">mesa 7</li>
                        <li className="long-table-L">mesa 8</li>
                        <li className="long-table-L">mesa 9</li>
                        <li className="long-table-L">mesa 10</li>
                    </ul>
                    <div className="center">
                        <ul className="short-table-container-L-side">
                            <li className="short-table-L">mesa 11</li>
                            <li className="short-table-L">mesa 12</li>
                        </ul>
                        <div className="contenedor-barras-L">
                            <form>
                                <div className="contenedor-radios">
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
                                </div>
                            </form>
                            <ul className="barra-container">
                                <li className="barra">{'Barra ' + this.state.selectedOption}</li>
                            </ul>
                        </div>

                        <ul className="short-table-container-L-side">
                            <li className="short-table-L">mesa 13</li>
                            <li className="short-table-L">mesa 14</li>
                        </ul>
                    </div>
                    <ul className="long-table-container-L">
                        <li className="long-table-L">mesa 15</li>
                        <li className="long-table-L">mesa 16</li>
                        <li className="long-table-L">mesa 17</li>
                        <li className="long-table-L">mesa 18</li>
                        <li className="long-table-L">mesa 19</li>
                    </ul>
                    <ul className="long-table-container-L">
                        <li className="long-table-L">mesa 20</li>
                        <li className="long-table-L">mesa 21</li>
                        <li className="long-table-L">mesa 22</li>
                        <li className="long-table-L">mesa 23</li>
                        <li className="long-table-L">mesa 24</li>
                    </ul>
                    <div className="short-table-L-side-last">
                        <div className="contenedor-de-mesas-peques">
                            <ul className="short-table-container-L-side">
                                <li className="short-table-L">mesa 25</li>
                                <li className="short-table-L">mesa 26</li>
                            </ul>
                        </div>
                        <div className="contenedor-de-mesas-peques">
                            <ul className="short-table-container-L-side">
                                <li className="short-table-L">mesa 27</li>
                                <li className="short-table-L">mesa 28</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
