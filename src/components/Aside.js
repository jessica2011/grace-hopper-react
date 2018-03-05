import React, { Component } from 'react';
import './css/aside.css';
class Aside extends Component {
  render() {
    return (
      <aside >
        <table className="sumary-table table">
          <thead>
            <tr className="picture">
              <td></td>
              <th className="p-3">Grace Murray Hopper</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th></th>
              <td>
                <img className="img" src="https://jessica2011.github.io/GreceHopper/assets/imagen/Grace_Hopper.jpg" alt="Grace Hopper"></img>
                <p className="text-center img pt-3">Rear Admiral Grace M. Hopper, 1984</p>
              </td>
            </tr>
            <tr className="picture m-1">
              <td></td>
              <th>Información personal</th>
            </tr>
            <tr>
              <th>Nacimiento</th>
              <td>9 de diciembre de 1906<br></br>Nueva York, Estados Unidos <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/35px-Flag_of_the_United_States.svg.png" alt="EE.UU" ></img></td>
            </tr>
            <tr>
              <th>Fallecimiento</th>
              <td>1 de enero de 1992 (85 años)</td>
            </tr>
            <tr>
              <th>Lugar de sepultura</th>
              <td>Cementerio nacional de Arlington</td>
            </tr>
            <tr>
              <th>Residencia</th>
              <td>Nuevo York</td>
            </tr>
            <tr>
              <th>Nacionalidad</th>
              <td>Estadounidense</td>
            </tr>
            <tr className="picture m-1">
              <td></td>
              <th>Educación</th>
            </tr>
            <tr>
              <th>Alma máter</th>
              <td>Vassar College (titulo de grado)<br></br> Universidad Yale (maestría)<br></br> Universidad Yale (Ph. D) <br></br>Waldlaw-Hartridge School</td>
            </tr>       
          </tbody>
        </table>
      </aside>
    );
  }
}

export default Aside;