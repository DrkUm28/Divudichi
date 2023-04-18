import React, { Component } from 'react'
import FormApertura from './forms-apertura-cierre-cajas/FormApertura'
import FormCierre from './forms-apertura-cierre-cajas/FormCierre'
import Confirmacion from './forms-apertura-cierre-cajas/Confirmacion'
import Resumen from './forms-apertura-cierre-cajas/Resumen'
export default class FormDelChef extends Component {

    state = {
        step: 1,
        name: '',
        value: 0,
        endValue: 0,
        booleano: true,
        booleano2: true
    }

    next = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    previous = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    borrar = () => {
        const { name, value } = this.state;
        this.setState({
            name: '',
            value: '',
            endValue: ''
        });
    }

    validarCamposApertura = (e) => {
        const variable = false;
        e.preventDefault();
        if (this.state.name !== "") {
            console.log('nombre valido')
            if (this.state.value !== 0) {
                console.log("apertura realizada")
                this.setState({
                    booleano: variable
                });
            } else {
                alert("por favor ingrese el valor de apertura")
            }
        } else {
            alert('por favor ingrese el nombre del restaurante')
        }
    }

    validarCamposCierre = (e) => {
        const variable = false;
        e.preventDefault();
        if (this.state.endValue !== 0) {
            this.setState({
                booleano2: variable
            });
        } else {
            alert('por favor ingrese el valor de cierre')
        }
    }


    render() {
        const { step } = this.state;
        const { name, value, endValue, booleano, booleano2 } = this.state;
        const values = { name, value, endValue, booleano, booleano2 };

        switch (step) {
            case 1:
                return (
                    <FormApertura
                        next={this.next}
                        handleChange={this.handleChange}
                        validarCampos={this.validarCamposApertura}
                        borrar={this.borrar}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormCierre
                        next={this.next}
                        previous={this.previous}
                        handleChange={this.handleChange}
                        validarCamposCierre={this.validarCamposCierre}
                        borrar={this.borrar}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirmacion
                        next={this.next}
                        previous={this.previous}
                    />
                )
            case 4:
                return (
                    <Resumen
                        values={values}
                    />
                )
        }
    }
}
