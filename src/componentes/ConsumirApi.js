import clientHttp from "../services/ClientHttp";

const { useEffect, useState } = require("react");

const ConsumirApi = () => {
    const [lista, setLista] = useState([]);
    //console.log(nombre);
    useEffect(() => {
        clientHttp.get(`/`)
        .then((response)=>{
            setLista(response.data.data)
        });
        // fetch("https://rickandmortyapi.com/api/character")
        //     .then(response => response.json())
        //     .then(data => setnombre(data.results))
        //     .catch(() => console.log("Algo salio mal"))
    }, []);
    console.log(lista);

    const handlerCrear=()=>{
        console.log("Hola")
    }

    const handlerEliminar=(item)=>{
        // navegacion(`/`)
        // clientHttp.delete(`/TipoProducto/?marcaId=${tipo.id}`)
        //     .then(()=>{
        //         navegacion(`/tipo-producto`)
        //     });
        console.log(item)
    }

    return (
        <><table className="table">
        <thead>
        <tr>
            <th ><input type="text" id="description" required maxLength="60"/></th>
            <th ><button onClick={()=>handlerCrear()}>Agregar</button></th>
        </tr>
        </thead>
        <tbody>
            {lista.map((item)=>
                <tr key={item.id}>
                    <td>{item.description}</td>
                    <td><button onClick={(e)=>handlerEliminar(item)}>Eliminar</button></td>
                </tr>)} 
        </tbody>
    </table>
    
    </>

    );
}

export default ConsumirApi;