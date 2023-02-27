import {Link, Route, Routes} from "react-router-dom";
import NuevaCarrera from "./pages/nuevaCarrera.jsx";

function App() {
  return (
      <div className="container">

              <h1>Carreras</h1>
              <Link role="button" to={"/nueva-carrera"}>Nueva Carrera</Link>


          <table role="grid">
              <thead>
              <tr>
                  <th scope="col">Lugar</th>
                  <th scope="col">Sector</th>
                  <th scope="col">Codcar</th>
                  <th scope="col">Modo</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">URL</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
              </tr>
              <tr>
                  <th scope="row">1</th>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
                  <td>Cell</td>
              </tr>
              </tbody>
          </table>

      </div>
  )
}

export default App
