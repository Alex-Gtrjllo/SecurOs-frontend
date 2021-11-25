import React, {useState} from "react";
//import './estilo.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

function App(){
  const [dropdown, setDropdown]=useState(false);
  const [dropdown2, setDropdown2]=useState(false);
  const [dropdown3, setDropdown3]=useState(false);
  const [dropdown4, setDropdown4]=useState(false);
  const [dropdown5, setDropdown5]=useState(false);
  const [dropdown6, setDropdown6]=useState(false);

  const abrirCerrarDropdown=()=>{
    setDropdown(!dropdown);
  }

  const abrirCerrarDropdown2=()=>{
    setDropdown2(!dropdown2);
  }

  const abrirCerrarDropdown3=()=>{
    setDropdown3(!dropdown3);
  }

  const abrirCerrarDropdown4=()=>{
    setDropdown4(!dropdown4);
  }

  const abrirCerrarDropdown5=()=>{
    setDropdown5(!dropdown5);
  }

  const abrirCerrarDropdown6=()=>{
    setDropdown6(!dropdown6);
  }

  const accionPrueba=()=>{
    alert("Soy la accion 1");
  }

  return (
    <div className="App">
      <br></br><br></br>
      <center>
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size="lg">
        <DropdownToggle caret>
          Tipo de solicitud de licencia
        </DropdownToggle>

        <DropdownMenu>
        <DropdownItem header>Solicitudes</DropdownItem>
          <DropdownItem onClick={()=>accionPrueba()}>Nuevo Proyecto</DropdownItem>
          <DropdownItem>Nueva Prueba de Concepto</DropdownItem>
          <DropdownItem>Curso / Certificacion</DropdownItem>
          <DropdownItem>Pendiente de Pago</DropdownItem>
          <DropdownItem>Cambio de Código</DropdownItem>
        </DropdownMenu>

      </Dropdown>
      <br></br><br></br>
      <Dropdown isOpen={dropdown2} toggle={abrirCerrarDropdown2} size="lg">
        <DropdownToggle caret>
          Tipo de Licencia
        </DropdownToggle>

        <DropdownMenu>
        <DropdownItem header>Licencias</DropdownItem>
          <DropdownItem onClick={()=>accionPrueba()}>Permanente</DropdownItem>
          <DropdownItem>Temporal</DropdownItem>
          <DropdownItem>Demo Kit</DropdownItem>
        </DropdownMenu>

      </Dropdown>
      <br></br><br></br>
      <Dropdown isOpen={dropdown3} toggle={abrirCerrarDropdown3} size="lg">
        <DropdownToggle caret>
          Versiones SecureOS
        </DropdownToggle>

        <DropdownMenu>
        <DropdownItem header>Versiones</DropdownItem>
          <DropdownItem onClick={()=>accionPrueba()}>8.x</DropdownItem>
          <DropdownItem>9.x</DropdownItem>
          <DropdownItem>10</DropdownItem>
          <DropdownItem>11</DropdownItem>
          <DropdownItem>10.1</DropdownItem>
          <DropdownItem>10.2</DropdownItem>
          <DropdownItem>10.3</DropdownItem>
          <DropdownItem>10.4</DropdownItem>
          <DropdownItem>10.5</DropdownItem>
          <DropdownItem>10.6</DropdownItem>
          <DropdownItem>10.7</DropdownItem>
          <DropdownItem>10.8</DropdownItem>
          <DropdownItem>10.9</DropdownItem>
          <DropdownItem>10.10</DropdownItem>
        </DropdownMenu>

      </Dropdown>
      <br></br><br></br>
      <Dropdown isOpen={dropdown4} toggle={abrirCerrarDropdown4} size="lg">
        <DropdownToggle caret>
          Edicion SecureOS
        </DropdownToggle>

        <DropdownMenu>
        <DropdownItem header>Ediciones</DropdownItem>
          <DropdownItem onClick={()=>accionPrueba()}>Xpress</DropdownItem>
          <DropdownItem>Profesional</DropdownItem>
          <DropdownItem>Premium</DropdownItem>
          <DropdownItem>Enterprise</DropdownItem>
          <DropdownItem>MCC</DropdownItem>
        </DropdownMenu>

      </Dropdown>

      <br></br><br></br>
      <Dropdown isOpen={dropdown5} toggle={abrirCerrarDropdown5} size="lg">
        <DropdownToggle caret>
          Idioma
        </DropdownToggle>

        <DropdownMenu>
        <DropdownItem header>Idiomas</DropdownItem>
          <DropdownItem onClick={()=>accionPrueba()}>English</DropdownItem>
          <DropdownItem>Spanish</DropdownItem>
          <DropdownItem>Russian</DropdownItem>
          <DropdownItem>Japanese</DropdownItem>
          <DropdownItem>Turkish</DropdownItem>
          <DropdownItem>Ukranian</DropdownItem>
          <DropdownItem>Chinese</DropdownItem>
          <DropdownItem>Portuguese BR</DropdownItem>
        </DropdownMenu>

      </Dropdown>

      <br></br><br></br>
      <Dropdown isOpen={dropdown6} toggle={abrirCerrarDropdown6} size="lg">
        <DropdownToggle caret>
          Rol Servidor
        </DropdownToggle>

        <DropdownMenu>
        <DropdownItem header>Roles</DropdownItem>
          <DropdownItem onClick={()=>accionPrueba()}>Servidor de Configuración</DropdownItem>
          <DropdownItem>Servidor Periférico</DropdownItem>
          <DropdownItem>Servidor de Failover</DropdownItem>
        </DropdownMenu>

      </Dropdown>

      </center>
      
    </div>
  );
}

export default App;