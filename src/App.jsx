import {Link, Route, Routes} from "react-router-dom";
import NuevaCarrera from "./pages/nuevaCarrera.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import useAxios from "axios-hooks";

function App() {

    const [carreras, setCarreras] = useState([])
    const [tipcar,setTipcar] = useState("carrera")

    useEffect(() => {
        axios.get('https://www-desa.ucasal.edu.ar/exp/manage-carreras/cambio-descripcion.php?a=carreras')
            .then(res => {
                setCarreras(res.data)
            })
            .catch(function (error){
                console.log("what")
            })
    },[])

    console.log(carreras)

    /*const [{data,loading,error}] = useAxios('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    console.log(data)
    const listaCarrera = data.results ? data.results : []*/

    function changeTable(valor) {
        const {value} = valor.target
        setTipcar(value)
    }



    return (
        <div className="container">

            <h1>Carreras</h1>
            <Link role="button" to={"/nueva-carrera"}>Nueva Carrera</Link>

            <hr/>


            <div className={"grid"}>
                <select name="tipcar" id="tipcar" defaultValue={"carrera"} onChange={changeTable}>
                    <option value="carrera">Carreras</option>
                    <option value="cursos">Cursos</option>
                </select>
                <div></div>
                <div></div>
                <div></div>
            </div>




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
                {carreras.map(carrera =>
                    <tr key={carrera.id_carrera}>
                        <th scope="row">{carrera.id_sede}</th>
                        <td>{carrera.codare}</td>
                        <td>{carrera.codcar}</td>
                        <td>{carrera.modo}</td>
                        <td>{carrera.nombre}</td>
                        <td> <a target={"_blank"} href={`https://www-desa.ucasal.edu.ar/landing/${carrera.nom_landing}.php`}>{carrera.nombre_corto}</a> </td>
                    </tr>
                )}
                </tbody>
            </table>

        </div>
    )
}

export default App
