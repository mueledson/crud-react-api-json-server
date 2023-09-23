import axios from "axios";
import { useState, useEffect } from "react";

const Listar = () => {
    const url = "http://localhost:8080/pokemon";
    const [pokemons, setPokemons] = useState([]);

    useEffect( () => {
        axios.get(url)
            .then(res => {
                setPokemons(res.data)
            })
            .catch(error => {
                console.log("Error: " + error);
            })
        }, [pokemons])

    return <table className="table table-light">
        <thead className="thead">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Tipo1</th>
                <th scope="col">Tipo2</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody className="tbody">
            {pokemons.map((item, i) => (
                <tr key={i}>
                    <td className="col-2">{item.id}</td>
                    <td className="col-4 table-nome">{item.nome}</td>
                    <td className="col-2">{item.tipo1}</td>
                    <td className="col-2">{item.tipo2}</td>
                    <td>
                        <button className="btn btn-danger"><i className="fa fa-trash"></i></button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
}

export default Listar