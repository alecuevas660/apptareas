import React, {useState} from 'react';
import '../estilos/TareasFormulario.css'
import {v4 as uuidv4} from 'uuid';

function TareasFormulario(props){
     const [input, setInput] = useState('');
     const ManejarCambio = e =>{
        setInput(e.target.value)
        console.log(e.target.value)
     }
        
     const ManejarEnvio = e =>{
        e.preventDefault();
        const tareaNueva ={
            
            id :  uuidv4(),
            texto : input,
            completada: false
        }
        props.onSubmit(tareaNueva)
    }
    return(
        <form className='tarea-formulario'  onSubmit={ManejarEnvio}>
            <input
            className='tarea-input'
            type='text'
            placeholder='Escribe una tarea'
            name='texto'
            onChange={ManejarCambio}
            />
            <button className='tarea-boton'> 
            Agregar tarea
            </button>
        </form>
    )
}

export default TareasFormulario;