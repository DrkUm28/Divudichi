import React, { Component } from 'react'
import axios from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class Tabla extends Component {
  constructor(props) {
    super(props)

    this.state = {
        platillos: [{
            cod_comida: '',
            nombre: '',
            precio: '',
            cod_tipoComestible: '',
            cod_unidadMedida: '',
            detalle: '',
            ingredientes: '',
            linea: '',
            clase: '',
            es_bufet: '',
            es_especialidad: ''
        }],
        errorMsg: ''
    }
}

async getBuffet() {
    await axios.get('https://localhost:44394/api/Comida')
        .then(response => {
            response.data = JSON.parse(response.data);
            const platillos = response.data;
            this.setState({ platillos });
            console.table(platillos);
        })
        .catch(error => {
            console.log(error)
            this.setState({ errorMsg: 'se produjo un error recolectando la informacion de la base de datos' })
        })
}

componentDidMount() {
    this.getBuffet();
}


  render(){
    const {platillos}=this.state;
  return (
    <TableContainer component={Paper}>
      <Table className="tabla" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Precio</TableCell>
  
          </TableRow>
        </TableHead>
        <TableBody>
          {platillos.map((dato) => (
            <TableRow key={dato.codigo}>
              <TableCell component="th" scope="row">
                {dato.nombre}
              </TableCell>
              <TableCell align="right">{dato.precio}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  }
}


