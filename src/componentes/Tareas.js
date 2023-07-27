import React from 'react';
import '../estilos/Tareas.css';
import { AiFillCloseCircle } from "react-icons/ai";

function Tareas({id, texto, completada, completarTarea, eliminarTarea}) {
    return(
        <div className={completada ? 'tareas-contenedor completada': 'tareas-contenedor'}>
            <div 
            className='tarea-texto'
            onClick={() => completarTarea(id)}
            >
                {texto}
            </div>
            <div className='tarea-icono'
            onClick={() => eliminarTarea(id)}
            >
                <AiFillCloseCircle className='tarea-icono'/>
            </div>
        </div>
    )
};

export default Tareas;