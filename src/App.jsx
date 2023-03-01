import {Link, Route, Routes} from "react-router-dom";
import NuevaCarrera from "./pages/nuevaCarrera.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import useAxios from "axios-hooks";

function App() {

    const [carreras, setCarreras] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
            .then(res => {
                setCarreras(res.data.results)
            })
    },[])

    console.log(carreras)


    /*const [{data,loading,error}] = useAxios('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    console.log(data)
    const listaCarrera = data.results ? data.results : []*/



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
                {carreras.map(carrera =>
                    <tr>
                        <th scope="row">1</th>
                        <td>{carrera.name}</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                    </tr>
                )}


                </tbody>
            </table>

        </div>
    )
}

export default App
