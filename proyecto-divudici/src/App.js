import React from 'react';/*ahjsh*/
import './App.css';
import { Home } from './AppComponents/Home';
import Login from './AppComponents/Login';
import ListaReportes from './AppComponents/ListaReportes';
import Error from './AppComponents/Error';
import SingleRestaurant from './AppComponents/SingleRestaurant';
import { Route, Switch } from 'react-router-dom';
import Navbar from './AppComponents/SharedComponents/Navbar';
import MainRestaurantes from './AppComponents/OpcionesHome/MainRestaurantes';
import Especiales from './AppComponents/AdminRestaurante/Especiales'
import Mesas from './AppComponents/AdminRestaurante/Mesas'
import Empleados from './AppComponents/AdminRestaurante/Empleados'
import Puestos from './AppComponents/AdminRestaurante/Puestos'
import Restaurantes from './AppComponents/AdminRestaurante/Restaurantes'
import Bebidas from './AppComponents/AdminRestaurante/Opciones-Especiales/Bebidas'
import Especialidades from './AppComponents/AdminRestaurante/Opciones-Especiales/Especialidades'
import Buffet from './AppComponents/AdminRestaurante/Opciones-Especiales/Buffet'
import AgregarBebida from './AppComponents/AdminRestaurante/Opciones-Especiales/Agregar-Especiales/AgregaBebida';
import AgregarComida from './AppComponents/AdminRestaurante/Opciones-Especiales/Agregar-Especiales/AgregaComida';
import AgregarEspecialidad from './AppComponents/AdminRestaurante/Opciones-Especiales/Agregar-Especiales/AgregaEspecialidad';
import AgregarMesa from './AppComponents/AdminRestaurante/Opciones-Mesas/AgregarMesa'
import AgregarEmpleado from './AppComponents/AdminRestaurante/Opciones-Empleado/AgregarEmpleado'
import AgregarPuesto from './AppComponents/AdminRestaurante/Opciones-Puesto/AgregarPuesto'
import ControlClientes from './AppComponents/OpcionesHome/ControlClientes'
import MainProveedores from './AppComponents/OpcionesHome/MainProveedores'
import Marcas from './AppComponents/AdminProveedores/Marcas'
import Productos from './AppComponents/AdminProveedores/Productos'
import ListaProveedores from './AppComponents/AdminProveedores/ListaProveedores'
import AgregarMarca from './AppComponents/AdminProveedores/Opciones-Marca/AgregarMarca'
import Comestibles from './AppComponents/AdminProveedores/Opciones-Productos/Comestibles'
import DesechablesYEmpaques from './AppComponents/AdminProveedores/Opciones-Productos/DesechablesYEmpaques'
import LimpiezaEHigiene from './AppComponents/AdminProveedores/Opciones-Productos/LimpiezaEHigiene'
import Tecnologia from './AppComponents/AdminProveedores/Opciones-Productos/Tecnologia'
import EquiposYUtensilios from './AppComponents/AdminProveedores/Opciones-Productos/EquiposYUtensilios'
import AgregarComestible from './AppComponents/AdminProveedores/Opciones-Productos/Agregar/AgregarComestible'
import AgregarDesechable from './AppComponents/AdminProveedores/Opciones-Productos/Agregar/AgregarDesechable'
import AgregarLimpieza from './AppComponents/AdminProveedores/Opciones-Productos/Agregar/AgregarLimpieza'
import AgregarTecnologia from './AppComponents/AdminProveedores/Opciones-Productos/Agregar/AgregarTecnologia'
import AgregarEquipo from './AppComponents/AdminProveedores/Opciones-Productos/Agregar/AgregarEquipo'
import AgregaRestaurante from './AppComponents/AdminRestaurante/Opciones-Restaurantes/AgregaRestaurante'
import AgregarProveedor from './AppComponents/AdminProveedores/Opciones-Proveedor/AgregarProveedor'
import Bitacora from './AppComponents/AdminReportes/Bitacora'
import Facturacion from './AppComponents/AdminReportes/Facturacion'
import Clientes from './AppComponents/AdminReportes/Clientes'
import MainReportes from './AppComponents/OpcionesHome/MainReportes'
import MainSeguridad from './AppComponents/OpcionesHome/MainSeguridad'
import MainAdministracion from './AppComponents/OpcionesHome/MainAdministracion'
import Cajas from './AppComponents/AdminSeguridad/Cajas'
import Consecutivos from './AppComponents/AdminSeguridad/Consecutivos'
import Paises from './AppComponents/AdminSeguridad/Paises'
import Roles from './AppComponents/AdminSeguridad/Roles'
import Unidades from './AppComponents/AdminSeguridad/Unidades'
import Usuarios from './AppComponents/AdminSeguridad/Usuarios'
import AgregarUsuarios from './AppComponents/AdminSeguridad/Opciones-Usuarios/AgregarUsuario'
import AgregarConsecutivo from './AppComponents/AdminSeguridad/Opciones-Consecutivo/AgregarConsecutivo'
import AgregarPaises from './AppComponents/AdminSeguridad/Opciones-Paises/AgregarPaises'
import AgregarRoles from './AppComponents/AdminSeguridad/Opciones-Roles/AgregarRoles'
import AgregarUnidades from './AppComponents/AdminSeguridad/Opciones-Unidades/AgregarUnidades'
import { PrivateRoute } from './PrivateRoute'
import Picola from './AppComponents/AdminAdministracion/Picola'
import Turio from './AppComponents/AdminAdministracion/Turio'
import Notte from './AppComponents/AdminAdministracion/Note'
import FormAddClientesMesa from './AppComponents/AdminAdministracion/Componentes/forms-apertura-cierre-cajas/FormAddClientesMesa'



//aqui va la navegacion de la pagina  
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/reportes" component={MainReportes} />
        <Route exact path="/seguridad" component={MainSeguridad} />
        <Route exact path="/restaurantes" component={MainRestaurantes} />
        <PrivateRoute exact path="/restaurantes/:solo" component={SingleRestaurant} />
        <PrivateRoute exact path="/clientes" component={ControlClientes} />
        <PrivateRoute exact path="/proveedores" component={MainProveedores} />
        <PrivateRoute exact path="/administracion" component={MainAdministracion} />

        {/*routing de opciones de restaurante */}
        <PrivateRoute exact path="/especiales" component={Especiales} />
        <PrivateRoute exact path="/mesas" component={Mesas} />
        <PrivateRoute exact path="/empleados" component={Empleados} />
        <Route exact path="/puestos" component={Puestos} />
        <PrivateRoute exact path="/lista-restaurantes" component={Restaurantes} />
        <PrivateRoute exact path="/agregar-restaurante" component={AgregaRestaurante} />

        <PrivateRoute exact path="/bebidas" component={Bebidas} />
        <PrivateRoute exact path="/buffet" component={Buffet} />
        <PrivateRoute exact path="/especialidades" component={Especialidades} />
        <PrivateRoute exact path="/agregar-bebida" component={AgregarBebida} />
        <PrivateRoute exact path="/agregar-platillo" component={AgregarComida} />
        <PrivateRoute exact path="/agregar-especialidad" component={AgregarEspecialidad} />

        {/*routing para  opcion de mesa */}
        <PrivateRoute exact path="/agregar-mesa" component={AgregarMesa} />

        {/*routing para  opcion de empleados */}
        <PrivateRoute exact path="/agregar-empleado" component={AgregarEmpleado} />

        {/*routing para  opcion de puestos */}
        <Route exact path="/agregar-puesto" component={AgregarPuesto} />

        {/*routing para opciones de proveedores */}
        <PrivateRoute exact path="/marcas" component={Marcas} />
        <Route exact path="/productos" component={Productos} />
        <Route exact path="/lista-proveedores" component={ListaProveedores} />

        <PrivateRoute exact path="/agregar-marca" component={AgregarMarca} />
        <Route exact path="/comestibles" component={Comestibles} />
        <Route exact path="/desechables-y-empaques" component={DesechablesYEmpaques} />
        <PrivateRoute exact path="/limpieza-e-higiene" component={LimpiezaEHigiene} />
        <Route exact path="/tecnologia" component={Tecnologia} />
        <PrivateRoute exact path="/equipos-y-utensilios" component={EquiposYUtensilios} />
        <PrivateRoute exact path="/agregar-comestible" component={AgregarComestible} />
        <PrivateRoute exact path="/agregar-desechable-y-empaque" component={AgregarDesechable} />
        <PrivateRoute exact path="/agregar-limpieza" component={AgregarLimpieza} />
        <PrivateRoute exact path="/agregar-tecnologia" component={AgregarTecnologia} />
        <PrivateRoute exact path="/agregar-equipo" component={AgregarEquipo} />
        <Route exact path="/agregar-proveedor" component={AgregarProveedor} />

        <PrivateRoute exact path="/bitacora" component={Bitacora} />
        <PrivateRoute exact path="/reportes-facturacion" component={Facturacion} />
        <PrivateRoute exact path="/reportes-clientes" component={Clientes} />

        <Route exact path="/usuarios" component={Usuarios} />
        <Route exact path="/roles" component={Roles} />
        <Route exact path="/consecutivos" component={Consecutivos} />
        <PrivateRoute exact path="/paises" component={Paises} />
        <PrivateRoute exact path="/cajas" component={Cajas} />
        <PrivateRoute exact path="/unidades-medida" component={Unidades} />

        <Route exact path="/agregar-usuario" component={AgregarUsuarios} />
        <Route exact path="/agregar-consecutivo" component={AgregarConsecutivo} />
        <PrivateRoute exact path="/agregar-pais" component={AgregarPaises} />
        <Route exact path="/agregar-rol" component={AgregarRoles} />
        <PrivateRoute exact path="/agregar-unidad" component={AgregarUnidades} />
        <PrivateRoute exact path="/picola" component={Picola} />
        <PrivateRoute exact path="/turio" component={Turio} />
        <PrivateRoute exact path="/notte" component={Notte} />
        <PrivateRoute exact path="/formClientes" component={FormAddClientesMesa} />





        <Route component={Error} />
      </Switch>


    </div>
  );
}

export default App;
