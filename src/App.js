import './App.css';
import tarealogo from './img/tarealogo.png'
import Tareas  from './componentes/Tareas';
import ListaTareas from './componentes/ListaTareas';
function App() {
  return (
    <div className="app-tareas">
      <div className='logo-tareas'>
        <img className='logotarea' src={tarealogo}></img>
        <h1>AppTareas</h1>
      </div>

      <div className='lista-tareas'>
        <h1 className='tareas-h1'>Mis tareas</h1>
        <ListaTareas/>
      </div>
    </div>
  );
}

export default App;
