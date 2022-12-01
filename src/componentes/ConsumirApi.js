import clientHttp from "../services/ClientHttp";
import { useNavigate } from "react-router-dom";

const { useEffect, useState } = require("react");

const ConsumirApi = () => {
    const [lista, setLista] = useState([]);
    const [tarea, setTarea] = useState([]);
    const [descripcion, setDescripcion] = useState("");
    const navegacion = useNavigate();

    useEffect(() => {
        clientHttp.get(`/?id_author=18`)
            .then((response) => {
                setLista(response.data.data)
            });
    }, []);

    const handlerCrear = () => {
        navegacion(`/*`)
        clientHttp.post(`/`, tarea)
            .then(() => {
                navegacion(`/`)
            });
    }

    const handlerEliminar = (item) => {
        navegacion(`/*`)
        clientHttp.delete(`/${item.id}`)
            .then(() => {
                navegacion(`/`)
            });
        console.log(item)
    }
    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.id;
        setDescripcion((tareaCurrent) => ({ ...tareaCurrent, [name]: value }));
        console.log(descripcion)

        const fecha = new Date().toISOString();
        setTarea({ description: descripcion.description, status: 0, id_author: 18, created_at: fecha, finish_at: fecha });
        console.log(tarea);

    };

    return (
        <><table className="table">
            <thead>
                <tr>
                    <th ><input type="text" id="description" required maxLength="60"
                        onChange={e => handleChange(e)} /></th>
                    <th ><button onClick={() => handlerCrear()}>Agregar</button></th>
                </tr>
            </thead>
            <tbody>
                {lista.map((item) =>
                    <tr key={item.id}>
                        <td>{item.description}</td>
                        <td><button onClick={(e) => handlerEliminar(item)}>Eliminar</button></td>
                    </tr>)}
            </tbody>
        </table>

        </>

    );
}

export default ConsumirApi;